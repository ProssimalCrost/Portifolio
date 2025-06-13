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
  return (
    <AppBar position="absolute" color="transparent" elevation='0' >
      <StyledToolbar>
        <StyledMenuItem>ABOUT</StyledMenuItem>
        <StyledMenuItem>SKILLS</StyledMenuItem> 
        <StyledMenuItem>PROJECTS</StyledMenuItem>  
        
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar
