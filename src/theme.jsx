import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/bitter';
import '@fontsource/raleway';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#6F08EF',
    },
    secondary: {
      main: '#00e1ff',
    },
    accent: {
      main: '#F50CE5', 
    },
  },
  typography: {
        fontFamily: 'Raleway, Arial, sans-serif',
    }
});

theme = responsiveFontSizes(theme);

export default theme;