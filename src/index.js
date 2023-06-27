import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import Header from './js/header.js';
import Home from './js/home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <i className="fa-solid fa-angles-down scroll"></i>
  </React.StrictMode>
);