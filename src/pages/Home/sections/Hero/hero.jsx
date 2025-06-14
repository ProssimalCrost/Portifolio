import { Container, Grid, styled, Typography, Button, Box} from "@mui/material"
import Avatar from "../../../../assets/imagens/avatarnb.png"
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import EmailIcon from '@mui/icons-material/Email';
import { ParallaxProvider } from "react-scroll-parallax";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
         backgroundImage: "url('https://images.unsplash.com/photo-1617224908579-c92008fc08bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
         backgroundSize: 'cover',
         width: '100%',
         height: "100vh",
         paddingTop: "1px",
         display: "flex",
         alignItems: "center",
         position: 'relative',  
         
    }))

    const Styledimg = styled("img")(() => ({
        width: "100%",       
        maxWidth: "300px",   
        borderRadius: "10%",
        display: "flex",
        margin: "0 auto",
        border:'1px solid ${theme.palette.primary.contrastText}'
        
    }))

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/Theylon_Siqueira_currículo.pdf',
        link.download = 'curriculo.pdf',
        link.click();
    }

    const Whatsapp = () => {
      const phone = "5531935005003"
      const message = "Vamo codar juntos!";
      const link = `https://api.whatsapp.com/send/?phone=5531935005003&text=vamo+codar+juntos%21&type=phone_number&app_absent=0`
      window.open(link)
    }


  return (
   <>
   <ParallaxProvider>
    <StyledHero>
        <Container sx={{ backgroundColor: 'transparent' }}>
            <Grid container spacing={2} display="flex" justifyContent="center">
                
                <Grid  xs={12} md={5}>                 
                    <Styledimg src={Avatar} alt="" />
                </Grid>
                        
                <Grid  xs={12} md={7} container direction="column" spacing={2}>
                    <Typography color="primary" variant="h1" textAlign="center">
                        Theylon Augusto
                    </Typography>
                    <Typography color="secondary" variant="h2" textAlign="center">
                        Engenheiro de Software
                    </Typography>
                
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SimCardDownloadIcon />}
                            sx={{ minWidth: 200 }}
                            onClick={handleDownload }
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
                            onClick={Whatsapp}
                        >
                            ME CONTATE
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            
        </Container>
    </StyledHero>
    </ParallaxProvider>
   </>

  )}
export default Hero
