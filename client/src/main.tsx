import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import router from './routes';
import { createTheme } from '@mui/material';
import { themeOptions } from './theme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(themeOptions)}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
