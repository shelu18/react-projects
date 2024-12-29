import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../first-project/styles.css';
import App from '../first-project/app.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);