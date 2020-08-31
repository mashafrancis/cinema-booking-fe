// react library
import * as React from 'react';

// third-party libraries
import { ArrowBackRounded } from '@material-ui/icons';

// styles
import './PageNotFound.scss';

// Interfaces
import { PageNotFoundProps } from './interfaces';

/**
 * Renders the page not found error message
 * @returns {JSX}
 */
const PageNotFound = (props: PageNotFoundProps): JSX.Element => (
  <div id="notfound">
    <div className="notfound">
      <div className="notfound-404" />
      <h1>404</h1>
      <h2>Oops! Page Not Be Found</h2>
      <p>
        Sorry but the page you are looking for does not exist, have been
        removed. name changed or is temporarily unavailable
      </p>
      <ArrowBackRounded onClick={props?.history?.goBack} />
      <span className="mdc-button__label">Back</span>
    </div>
  </div>
);

export default PageNotFound;
