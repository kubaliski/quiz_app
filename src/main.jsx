import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@context';
import { GlobalErrorBoundary, DOMRecoveryMonitor } from '@components/common';
import { installGlobalErrorHandler } from '@services/errorService';
import '@styles/index.css';

// Instalar manejador global de errores
installGlobalErrorHandler();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <ThemeProvider>
        <DOMRecoveryMonitor />
        <App />
      </ThemeProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>,
);