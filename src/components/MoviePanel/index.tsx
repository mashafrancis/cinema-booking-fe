import * as React from 'react';

// components
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {MoviePanelProps} from "@components/MoviePanel/interfaces";
import MovieDetails from '@components/MovieDetails';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: '14px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

export const MoviePanel: React.FunctionComponent<MoviePanelProps> = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { movie } = props;

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Basic</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MovieDetails detail="Actors" content={movie.Actors} />
        </AccordionDetails>
        <AccordionDetails>
          <MovieDetails detail="Director" content={movie.Director} />
        </AccordionDetails>
        <AccordionDetails>
          <MovieDetails detail="Plot" content={movie.Plot} />
        </AccordionDetails>
        <AccordionDetails>
          <MovieDetails detail="Genre" content={movie.Genre} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Other</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MovieDetails detail="Awards" content={movie.Awards} />
        </AccordionDetails>
        <AccordionDetails>
          <MovieDetails detail="Website" content={movie.Website} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MoviePanel;
