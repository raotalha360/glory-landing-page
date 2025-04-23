import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Remove the bootstrap import from here since we're using CDN

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);