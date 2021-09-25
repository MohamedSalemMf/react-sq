import React from 'react';
import ReactDOM from 'react-dom';

import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min"

import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';


ReactDOM.render(
  <BrowserRouter basename="/react-sq/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

