import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Basic Error Overlay for debugging
window.onerror = function (message, source, lineno, colno, error) {
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100%';
  errorDiv.style.backgroundColor = 'red';
  errorDiv.style.color = 'white';
  errorDiv.style.padding = '20px';
  errorDiv.style.zIndex = '9999';
  errorDiv.innerHTML = `<h3>Error: ${message}</h3><p>${source}:${lineno}:${colno}</p><pre>${error && error.stack}</pre>`;
  document.body.appendChild(errorDiv);
};

window.onunhandledrejection = function (event) {
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '50%';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100%';
  errorDiv.style.backgroundColor = 'blue';
  errorDiv.style.color = 'white';
  errorDiv.style.padding = '20px';
  errorDiv.style.zIndex = '9999';
  errorDiv.innerHTML = `<h3>Promise Error: ${event.reason}</h3>`;
  document.body.appendChild(errorDiv);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)