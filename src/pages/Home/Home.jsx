import { ThemeProvider } from "@emotion/react"
import AnimatedBackground from "../../assets/components/Animation/background"
import NavBar from "../../assets/components/NavBar/Navbar"
import Hero from "./sections/Hero/hero"
import theme from "../../theme"
import Skills from "./skills/skills"


const Home = () => {

  return (
   <>
    <AnimatedBackground/>
    <NavBar/>
    

    <section id="hero">
    <Hero/>
    <Skills/>
    </section>

    {/* <ThemeProvider theme={theme}> 
       
    <section id="about" style={{ height:"100vh", color:"white", background: "#111"}}>
      <h1>About Me</h1>
      <p>Sobre Mim
         Olá! Sou um estudante de Engenharia de Software de 20 anos no Centro Universitário Católica do Leste de Minas Gerais. Sou fascinado pelo desenvolvimento e meu objetivo é seguir a carreira fullstack.
      </p>
    </section>

    <section id="skills" style={{ height:"100vh", color:"white", background: "#111"}}>
      <h1>skills</h1>
      <p>Minhas Habilidades
          Linguagens e Frameworks
          <li>Frontend: React, HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Backend: Node.js, .NET (C#)</li>
         <li> Banco de Dados: SQL (PostgreSQL, SQL Server, MySQL - dependendo do que você usou mais)</li>
          Ferramentas e Outros
          <li>Controle de Versão: Git, GitHub</li>
          <li>Automação: Experiência em criação de scripts para otimização de processos.</li>
          <li>Metodologias: Conhecimento em metodologias ágeis (Scrum, Kanban)</li>
      </p>
    </section>
</ThemeProvider>*/}
   </>

  )}
export default Home
