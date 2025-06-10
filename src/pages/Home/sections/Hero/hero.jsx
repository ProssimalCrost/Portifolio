import { Container, Grid, styled, Typography} from "@mui/material"
import Avatar from "../../../../assets/imagens/avatar.jpg"
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
         backgroundColor: "black",
         height: "100vh"
    }))

     const Styledimg = styled("img")(() => ({
        width: "100%",       
        maxWidth: "250px",   
        borderRadius: "50%",
        display: "flex",
        margin: "0 auto",
    }))


  return (
   <>
    <StyledHero>
        <Container>
            <Grid container spacing={4} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Styledimg src={Avatar} alt="" />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Typography color="primary" variant="h1" textAlign="center">Theylon Augusto</Typography>
                    <Typography color="primary" variant="h2" textAlign="center">Engenheiro de Software</Typography>

                    <Grid container >
                        <Grid item xs={12} md={6} display="flex" justifyContent="center">
                            <button>
                                <SimCardDownloadIcon fontSize="medium"/>
                                DOWNLOAD CV
                            </button>
                        </Grid>
                        <Grid item xs={12} md={6} display="flex" justifyContent="center">
                            <button>
                                <EmailIcon/>
                                ME CONTATE
                            </button>
                        </Grid>

                    </Grid>
                   
                    
                </Grid>
                </Grid>
        </Container>
    </StyledHero>

   </>

  )}
export default Hero
