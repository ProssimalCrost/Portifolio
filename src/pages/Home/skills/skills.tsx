import React from "react";
import { Container, Typography, Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import AnimatedBackground from "../../../assets/components/Animation/background";

const Skills = () => {
  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundImage: "url('imagens/codi.png')",
    backgroundColor: "#030522",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(0),
    position: "relative",
    overflow: "hidden",
  }));

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const skillsList = [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git / GitHub",
    "Docker",
  ];

  return (
    
    <StyledSkills id="skills">
      <AnimatedBackground/>
      {/* 🔹 Transição suave no TOPO */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100px",
          background: "linear-gradient(to top, transparent, #310357ff, #141414ff)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid
            xs={12}
            textAlign="center"
            component={motion.div}
            variants={fadeInUp}
            custom={0}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "white", fontWeight: 800 }}
            >
              Skills
            </Typography>
            <Typography variant="body1" sx={{ color: "white", mb: 6 }}>
              Tecnologias e ferramentas que domino:
            </Typography>
          </Grid>

          {skillsList.map((skill, index) => (
            <Grid
              key={index}
              display="flex"
              justifyContent="center"
              component={motion.div}
              variants={fadeInUp}
              custom={index / 5}
            >
              <Box
                sx={{
                  color: "white",
                  border: "1px solid #444444ff",
                  borderRadius: "12px",
                  padding: "1rem 2rem",
                  textAlign: "center",
                  fontWeight: 800,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1f1f1f",
                    transform: "translateY(-4px)",
                    borderColor: "#6f08ef",
                  },
                }}
              >
                {skill}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
