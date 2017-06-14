import { render } from 'react-dom';
import React from 'react';
import App from './app';
import {
  BrowserRouter as Router,
} from 'react-router-dom'

const root = document.getElementById('root');

render((
  <Router
    basename="/withFeRouter"
  >
    <App />
  </Router>
), root);