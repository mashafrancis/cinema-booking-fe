import * as React from 'react';
import axios from 'axios';
import generateUrlWithQuery from '@utils/generateUrlWithQuery';
import {IMovie} from "@context/MoviesContext/interfaces";
import httpRequest from "@utils/http";

const MoviesContext = React.createContext({
  movie: {},
  loading: false,
  setSearch: () => {
  },
  searchedMovies: () => {
  },
  handleSearchChange: (e: any) => {
  },
  handleSearchSubmit: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  },
});

interface IProps {
  children: React.ReactNode;
}

const MoviesProvider = ({children, ...props}: IProps) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [movie, setMovie] = React.useState<IMovie>({
    Actors: "",
    Awards: "",
    BoxOffice: "",
    Country: "",
    DVD: "",
    Director: "",
    Genre: "",
    Language: "",
    Metascore: "",
    Plot: "",
    Poster: "",
    Production: "",
    Rated: "",
    Ratings: [],
    Released: "",
    Response: "",
    Runtime: "",
    Title: "",
    Type: "",
    Website: "",
    Writer: "",
    Year: "",
    imdbID: "",
    imdbRating: "",
    imdbVotes: ""
  });
  const [search, setSearch] = React.useState<{}>({});
  const [searchedMovies, setSearchedMovies] = React.useState<any>([]);

  const http = axios.create({
    baseURL: `http://www.omdbapi.com`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const endpoint = generateUrlWithQuery('/', search);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const movieData = await http.get(endpoint);
      setMovie(movieData.data);
      setLoading(false);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleSearchChange = (query: React.SetStateAction<{}>) => setSearch(query);

  const handleSearchSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const searchedMovieData = await http.get(endpoint);
      setSearchedMovies(searchedMovieData);

      // create ticket
      const {imdbID, Title, Poster, Plot, Year} = searchedMovieData.data;
      const movieTicket = {
        movieId: imdbID,
        name: Title,
        image: Poster,
        summary: Plot,
        year: Year
      }
      await httpRequest.post('tickets', movieTicket)

      setLoading(false);
    } catch (e) {
      console.log('error', e);
    }
  };

  React.useEffect(() => {
    fetchMovie().then(() => setLoading(false));
  }, [search]);

  return (
    <MoviesContext.Provider
      value={{
        movie,
        loading,
        // @ts-expect-error
        setSearch,
        searchedMovies,
        handleSearchChange,
        handleSearchSubmit,
        ...props,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const MoviesConsumer = MoviesContext.Consumer;
export {MoviesProvider, MoviesContext, MoviesConsumer};
