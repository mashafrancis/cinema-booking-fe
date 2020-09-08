import * as React from 'react';

// third-party libraries
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
} from '@material/react-top-app-bar';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchInput from '@components/SearchBox';

// utils
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useViewport } from '../../hooks';
import {Avatar} from "@material-ui/core";
import {UserContext} from "@context/UserContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hideButton: {
      display: 'none',
    },
    sectionEnd: {
      display: 'inline-flex',
      justifyContent: 'flex-end',
      order: 1,
    },
  }),
);

const TopBar = () => {
  const classes = useStyles();
  const { width } = useViewport();
  const breakpoint = 539;

  const user = React.useContext(UserContext)
  const { name, avatar } = user;

  const renderAvatar = () => (
    <div className={classes.sectionEnd}>
      <Avatar alt={name} src={avatar} />
    </div>
  );

  return (
    <TopAppBar className="dashboard-mobile-nav">
      <TopAppBarRow>
        <TopAppBarSection align="start">
          {width > breakpoint && (
            <TopAppBarIcon navIcon tabIndex={0}>
              <HomeRoundedIcon />
            </TopAppBarIcon>
          )}

          <div className="topbar-divider topbar-lockup-divider" />
          <SearchInput />
          <div className="topbar-divider topbar-lockup-divider" />
          {renderAvatar()}
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}

export default TopBar;
