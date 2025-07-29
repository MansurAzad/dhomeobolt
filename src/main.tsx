import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadCriticalResources, addResourceHints, trackWebVitals } from './utils/performance';

// Initialize performance optimizations
preloadCriticalResources();
addResourceHints();

// Track web vitals in production
if (import.meta.env.PROD) {
  trackWebVitals();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
