// react libraries
import React from 'react';
import { render } from 'react-dom';

// third party packages
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from './App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
