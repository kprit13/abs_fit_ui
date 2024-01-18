import './App.css';
import AppHeader from './components/AppHeader';
import { ThemeProvider } from '@emotion/react';
import theme from './infra/theme';
import { BrowserRouter as Router } from 'react-router-dom/dist';
import MainRouter from './routers/MainRouter';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader />
      <Router>
        <MainRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
