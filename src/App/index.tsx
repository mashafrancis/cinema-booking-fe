import * as React from 'react';
import { AppProps } from './interfaces';
import Routes from '../routes';

export const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
};

export default App;
