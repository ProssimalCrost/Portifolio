import Home from './pages/Home/Home';
import AnimatedBackground from './assets/components/Animation/background';
import '@fontsource/bebas-neue';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const App = () => {
  return (
    <>
       <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
