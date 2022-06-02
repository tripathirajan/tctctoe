import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import { store } from './store';
const _color = deepPurple;

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: _color[900],
      paper: _color[800]
    }
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
