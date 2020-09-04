// react libraries
import * as React from 'react';
import { render } from 'react-dom';

// third party packages
import { BrowserRouter as Router } from 'react-router-dom';

// components
import { MoviesProvider } from '@context/MoviesContext';
import App from './App';

render(
  <MoviesProvider>
    <Router>
      <App />
    </Router>
  </MoviesProvider>,
  document.getElementById('root'),
);
