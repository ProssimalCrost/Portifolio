import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



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

const GitHub = () => {
  const link = `https://github.com/ProssimalCrost`
  window.open(link)
}

const linkedin = () => {
  const link = `https://www.linkedin.com/in/theylon-siqueira-44a327257/`
  window.open(link)
}

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

        <StyledMenuItem onClick={(linkedin)}>
           <LinkedInIcon sx={{ mr: 1 }} />
            linkedin
          
        </StyledMenuItem>

        <StyledMenuItem onClick={() => scrollToSection('skills')}>
            SKILLS
        </StyledMenuItem> 

       <StyledMenuItem onClick={(GitHub)}>
        <GitHubIcon sx={{ mr: 1 }}/>
          GITHUB
        </StyledMenuItem>  
        
      </StyledToolbar>
    </AppBar>
  )
};


export default NavBar
