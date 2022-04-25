import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Ask } from './Question';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ask/>
    <App />
  </React.StrictMode>
);