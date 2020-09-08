import * as React from 'react';
import {AppProps} from './interfaces';
import Routes from '../routes';
import {ViewportProvider} from "@context/ViewportContext";
import {ComponentProvider} from "@context/ComponentContext";
import {MoviesProvider} from '@context/MoviesContext';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import { UserContext } from '@context/UserContext';

// styles
import './App.scss'


export const App = (props: AppProps) => {
  const {user} = props;

  return (
    <React.StrictMode>
      <UserContext.Provider value={user}>
        <MoviesProvider>
          <ViewportProvider>
            <ComponentProvider>
              <Routes/>
            </ComponentProvider>
          </ViewportProvider>
        </MoviesProvider>
      </UserContext.Provider>
    </React.StrictMode>
  );
};

export const mapStateToProps = (state: any) => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(App);
