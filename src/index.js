import React from 'react';
import ReactDOM from 'react-dom/client';
import './modules/css/App.css';
import Header from './modules/js/header.js';
import Home from './modules/js/home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <i className="fa-solid fa-angles-down scroll"></i>
  </React.StrictMode>
);