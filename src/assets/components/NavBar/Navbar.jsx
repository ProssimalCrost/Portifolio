import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
}))

const StyledMenuItem = styled(MenuItem)({
  color: 'white',
  fontSize: '1rem',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#00e1ff', 
    backgroundColor: 'transparent', 
  },
});


const NavBar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="absolute" color="transparent" elevation='0' >
      <StyledToolbar>
        <StyledMenuItem onClick={() => scrollToSection('about')}>ABOUT</StyledMenuItem>
        <StyledMenuItem onClick={() => scrollToSection('skills')}>SKILLS</StyledMenuItem> 
        <StyledMenuItem onClick={() => scrollToSection('projects')}>PROJECTS</StyledMenuItem>  
        
      </StyledToolbar>
    </AppBar>
  )
};


export default NavBar
