// react libraries
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";

// third party packages
import {BrowserRouter as Router} from 'react-router-dom';

// components
import App from './App';
import store from "./store";

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
