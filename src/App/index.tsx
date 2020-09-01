import React, { FunctionComponent } from 'react';
import { AppProps } from './interfaces';
import Routes from '../routes';

export const App: FunctionComponent<AppProps> = (props) => {
  return (
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
};

export default App;
