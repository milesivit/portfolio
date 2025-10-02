import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact
import 'primereact/resources/primereact.min.css'; //  PrimeReact
import 'primeicons/primeicons.css'; // Iconos PrimeReact
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
