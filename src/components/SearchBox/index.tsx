import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { ComponentContext } from '@context/ComponentContext';
import { MoviesContext } from '@context/MoviesContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    submitBtn: {
      color: '#1967d2',
    },
  }),
);

export const SearchInput: React.FunctionComponent = (props) => {
  const classes = useStyles(props);
  const movieDetails = React.useContext(MoviesContext);
  const { handleSearchChange, handleSearchSubmit } = movieDetails;

  const componentContext = React.useContext(ComponentContext);
  const { setSelectedIndex } = componentContext;

  const searchSubmit = async () => {
    await handleSearchSubmit;
    setSelectedIndex(1);
  };

  return (
    <Paper
      component="form"
      className={`${classes.root} search`}
      variant='outlined'
      onSubmit={searchSubmit}
    >
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={() => searchSubmit().then(() => setSelectedIndex(1))}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        fullWidth
        placeholder="Search for a movie"
        inputProps={{ 'aria-label': 'search movie' }}
        onChange={(e) => handleSearchChange({t: e.target.value})}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        type="submit"
        className={classes.iconButton}
        aria-label="directions"
        onClick={() => searchSubmit().then(() => setSelectedIndex(1))}
      >
        <SendRoundedIcon className={classes.submitBtn} />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
