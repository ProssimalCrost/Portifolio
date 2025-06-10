import { Container, Grid, styled, Typography, Button} from "@mui/material"
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
        paddingTop: "10px"
    }))

    const Styledbutton = styled("button")(() => ({
        
    }))


  return (
   <>
    <StyledHero>
        <Container>
            <Grid container spacing={2} display="flex" justifyContent="center">

                <Grid item xs={12} md={4}>
                    <Styledimg src={Avatar} alt="" />
                </Grid>

                <Grid item xs={12} sm={8} container direction="column" spacing={2}>
                    <Typography color="primary" variant="h1" textAlign="center">
                        Theylon Augusto
                    </Typography>
                    <Typography color="secondary" variant="h2" textAlign="center">
                        Engenheiro de Software
                    </Typography>

                    <Grid container item spacing={3} justifyContent="center">
                        <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SimCardDownloadIcon />}
                            sx={{ minWidth: 200 }}
                        >
                            DOWNLOAD CV
                        </Button>
                        </Grid>

                        <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            startIcon={<EmailIcon />}
                            sx={{ minWidth: 200 }}
                        >
                            ME CONTATE
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>

                </Grid>
            
        </Container>
    </StyledHero>

   </>

  )}
export default Hero
