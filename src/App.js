import './App.css';
import AppHeader from './components/AppHeader';
import { ThemeProvider } from '@emotion/react';
import theme from './infra/theme';
import { BrowserRouter as Router } from 'react-router-dom/dist';
import MainRouter from './routers/MainRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader/>
      <Box sx={{ marginTop: '128px'}}>
      <Router>
        <MainRouter />
      </Router>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
