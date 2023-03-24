import { ErrorBoundary } from 'common/UI/ErrorBoundary';
import { Text } from 'common/UI/Text';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './common/context/themeContext/themeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Text>Oops..! Something went wrong!</Text>}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
