// react library
import * as React from 'react';

// third party apps
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from '@components/SearchBox';

// styles
import './HomePage.scss';

// images
import google from '../../assets/images/google.svg';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    width: '30px',
  },
}));

const HomePage = (): JSX.Element => {
  const classes = useStyles();
  const handleLogin = () =>
    window.location.replace('http://127.0.0.1:3030/oauth/google');
  const renderExploreMore = () => (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<img className={classes.icon} src={google} alt="logo" />}
        onClick={handleLogin}
      >
        Login with Google
      </Button>
    </>
  );

  return (
    <div className="cover">
      <section id="hero">
        <div className="hero-container">
          <div className="hero-info" data-testid="home-page">
            <h1>Cinema Booking</h1>
            <SearchInput />
            {renderExploreMore()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
