import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const animationFrameId = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animateHeader = useRef(true);
  const widthRef = useRef(window.innerWidth);
  const heightRef = useRef(window.innerHeight);
  const largeHeaderRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = widthRef.current;
    let height = heightRef.current;

    canvas.width = width;
    canvas.height = height;

    // Create points
    const points = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * (width / 20);
        const py = y + Math.random() * (height / 20);
        points.push({ x: px, originX: px, y: py, originY: py, active: 0, circle: null, closest: [] });
      }
    }

    // Find 5 closest points
    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const closest = [];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 === p2) continue;

        if (closest.length < 5) {
          closest.push(p2);
        } else {
          // Replace if closer
          let maxDist = -1;
          let maxIndex = -1;
          for (let k = 0; k < closest.length; k++) {
            const dist = getDistance(p1, closest[k]);
            if (dist > maxDist) {
              maxDist = dist;
              maxIndex = k;
            }
          }
          if (getDistance(p1, p2) < maxDist) {
            closest[maxIndex] = p2;
          }
        }
      }
      p1.closest = closest;
    }

    // Assign circle to each point
    points.forEach((p) => {
      p.circle = new Circle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)', ctx);
    });

    pointsRef.current = points;

    // Animate points shifting (simulate TweenLite with manual tween)
    points.forEach(shiftPoint);

    function shiftPoint(p) {
      const duration = 1000 + Math.random() * 1000; // ms
      const startX = p.x;
      const startY = p.y;
      const endX = p.originX - 50 + Math.random() * 100;
      const endY = p.originY - 50 + Math.random() * 100;
      const startTime = performance.now();

      function animate() {
        const now = performance.now();
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        // easeInOutCirc
        const easedT = t < 0.5 ? (1 - Math.sqrt(1 - (2 * t) ** 2)) / 2 : (Math.sqrt(1 - (-(2 * t - 2)) ** 2) + 1) / 2;

        p.x = startX + (endX - startX) * easedT;
        p.y = startY + (endY - startY) * easedT;

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          shiftPoint(p);
        }
      }
      animate();
    }

    function animate() {
      if (!animateHeader.current) {
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      points.forEach((p) => {
        const dist = getDistance(targetRef.current, p);

        if (dist < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (dist < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (dist < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }

        drawLines(ctx, p);
        p.circle.draw();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    }

    animate();

    // Event listeners
    function onMouseMove(e) {
      targetRef.current.x = e.pageX || e.clientX;
      targetRef.current.y = e.pageY || e.clientY;
    }

    function onScroll() {
      animateHeader.current = window.scrollY <= height;
    }

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      widthRef.current = width;
      heightRef.current = height;

      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        backgroundColor: 'transparent',
        display: 'block',
        pointerEvents: 'none'
      }}
    />
  );
};

// Helper classes and functions
function Circle(pos, rad, color, ctx) {
  this.pos = pos;
  this.radius = rad;
  this.color = color;
  this.ctx = ctx;
  this.active = 0;

  this.draw = () => {
    if (!this.active) return;
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(156,217,249,${this.active})`;
    ctx.fill();
  };
}

function drawLines(ctx, p) {
  if (!p.active) return;
  p.closest.forEach((c) => {
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(c.x, c.y);
    ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
    ctx.stroke();
  });
}

function getDistance(p1, p2) {
  return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
}

export default AnimatedBackground;
