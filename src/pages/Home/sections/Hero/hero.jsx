import { Grid, styled} from "@mui/material"
import Avatar from "../../../../assets/imagens/avatar.jpg"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
         backgroundColor: "black"
    }))

     const Styledimg = styled("img")(() => ({
        width: "60%",
        borderRadius: "50%"
    }))


  return (
   <>
    <StyledHero>
       <Grid container spacing={2}>
        <Grid size={4}>
            <Styledimg src={Avatar} alt="" />
        </Grid>
        <Grid size={8}>
            size=4
        </Grid>
        </Grid>
        
    </StyledHero>

   </>

  )}
export default Hero
