import { Container, Grid, styled, Typography, Button, Box} from "@mui/material"
import Avatar from "../../../../assets/imagens/avatar.jpg"
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
         backgroundImage: "url('https://images.unsplash.com/photo-1617224908579-c92008fc08bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
         backgroundSize: 'cover',
         width: '100%',
         height: "100vh",
         paddingTop: "1px",
         display: "flex",
         alignItems: "center",
         position: 'fixed',  
         zIndex: 0,
    }))


    const Styledimg = styled("img")(() => ({
        width: "100%",       
        maxWidth: "300px",   
        borderRadius: "30%",
        display: "flex",
        margin: "0 auto",
        border:'1px solid ${theme.palette.primary.contrastText}'
        
    }))


  return (
   <>
    <StyledHero>
        <Container sx={{ backgroundColor: 'transparent' }}>
            <Grid container spacing={2} display="flex" justifyContent="center">

                <Grid item xs={12} md={5}>
                    <Box position="relative">

                    </Box>
                    <Styledimg src={Avatar} alt="" />
                </Grid>

                <Grid item xs={12} md={7} container direction="column" spacing={2}>
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
