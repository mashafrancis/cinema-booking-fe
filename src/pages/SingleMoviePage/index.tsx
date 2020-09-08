import * as React from 'react';

// third-party libraries
import {
  Cell,
  Grid,
  Row
} from '@material/react-layout-grid';
import LocalMoviesTwoToneIcon from '@material-ui/icons/LocalMoviesTwoTone';

// components
import {MoviesContext} from "@context/MoviesContext";

// styles
import './SingleMoviePage.scss';

// interfaces
import {IMovie} from "@context/MoviesContext/interfaces";
import MoviePanel from "@components/MoviePanel";
import {createBooking} from "../../store/modules/booking";
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {SingleMoviePageProps} from "@pages/SingleMoviePage/interfaces";
import httpRequest from "@utils/http";
import {ComponentContext} from "@context/ComponentContext";


export const SingleMoviePage: React.FunctionComponent<SingleMoviePageProps> = props => {
  const movieDetails = React.useContext(MoviesContext);
  const componentContext = React.useContext(ComponentContext);
  const {setOpenSnack, setSnackMessage} = componentContext;

  // const { Title: {movie} } = movieDetails;
  // @ts-expect-error
  const movie: IMovie = movieDetails.movie

  const handleBookingMovie = async (event: any) => {
    event.preventDefault();
    const {imdbID, Title, Poster, Plot, Year} = movie;
    const movieTicket = {
      movieId: imdbID,
      name: Title,
      image: Poster,
      summary: Plot,
      year: Year
    }

    await httpRequest.post('tickets', movieTicket)
    const booking = { ticketId: movie.imdbID }
    props.createBooking(booking)
      .then(() => {
        setSnackMessage('Movie booked successfully');
        setOpenSnack(true);
      })
  }

  return (
    <Grid>
      <Row>
        <Cell columns={6} desktopColumns={6} tabletColumns={8} phoneColumns={4}>
          <div className="basic-info">
            <div className="basic-info__row movie-info">
              <div className="movie-poster">
                <img className="char-image" src={movie.Poster} alt="poster" />
              </div>
            </div>
            <div className="basic-info__row movie-info">
              <div className="movie-name">
                <p className="name">{movie.Title}</p>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            // className={classes.button}
            startIcon={<LocalMoviesTwoToneIcon />}
            onClick={handleBookingMovie}
          >
            Book Movie
          </Button>
        </Cell>
        <Cell columns={6} desktopColumns={6} tabletColumns={8} phoneColumns={4}>
          <MoviePanel movie={movie}/>
        </Cell>
      </Row>
    </Grid>
  );
};

export const mapDispatchToProps = (dispatch: any) => ({
  createBooking: (booking: { id: string; }) => dispatch(createBooking(booking))
})

export default connect(null, mapDispatchToProps)(SingleMoviePage)
