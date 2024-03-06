import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const root = ReactDOM.createRoot(document.getElementById('root'));
const defaultTheme = createTheme();
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


