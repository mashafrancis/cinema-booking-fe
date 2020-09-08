import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import logo from '../../assets/images/logo.png';

interface IProps {
  button: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: '600'
    },
    toolbar: {
      backgroundColor: '#00000024 !important'
    },
    icon: {
      width: '40px',
      paddingRight: '10px'
    },
  }),
);

const HomeHeader = (props: IProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar>
          {/*<img className={classes.icon} src={logo} alt="logo"/>*/}
          <Typography variant="h5" className={classes.title}>
            Cinema Booking
          </Typography>
          {props.button}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HomeHeader;
