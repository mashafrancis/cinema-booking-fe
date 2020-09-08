import * as React from 'react';

// components
import TopBar from '@components/TopBar';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import PageBottomNavigation from '@components/BottomNavigation';
import { ComponentContext } from '@context/ComponentContext';
import { ComponentRoutes } from '@components/ComponentRoutes';
import HomePage from '@pages/HomePage';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// interfaces
import {
  AppContainerProps,
  AppContainerState,
} from '@pages/AppContainer/interfaces';

// styles
import './AppContainer.scss';
import ErrorBoundary from '@components/ErrorBoundary';
import { useViewport } from '../../hooks';
import client from "@utils/authSockets";

const AppContainer: React.FunctionComponent<AppContainerProps> = (props) => {
  const componentContext = React.useContext(ComponentContext);
  const [state, setState] = React.useState<AppContainerState>({
    selectedIndex: 0,
    error: null,
    isLoading: true,
  });

  const { width } = useViewport();
  const breakpoint = 539;

  const { selectedIndex, openSnack, handleClose, snackMessage } = componentContext;

  return (
    <div className="container">
      {selectedIndex === 0 ? (
        React.createElement(HomePage)
      ) : (
        <>
          <TopBar />
          <TopAppBarFixedAdjust>
            <ErrorBoundary>
              {React.createElement(ComponentRoutes[selectedIndex].component)}
            </ErrorBoundary>
          </TopAppBarFixedAdjust>
          {width < breakpoint && <PageBottomNavigation />}
        </>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackMessage}
        action={
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default AppContainer;
