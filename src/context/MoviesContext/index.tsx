import * as React from 'react';
import axios from 'axios';
import generateUrlWithQuery from '@utils/generateUrlWithQuery';

const MoviesContext = React.createContext({
  movie: {},
  movieId: '',
  loading: false,
  setMovieId: () => {},
  searchedMovies: () => {},
  handleSearchChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {},
  handleSearchSubmit: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {},
});

interface IProps {
  children: React.ReactNode;
}

const MoviesProvider = ({ children, ...props }: IProps) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [movie, setMovie] = React.useState<any>({});
  const [movieId, setMovieId] = React.useState<string>('tt3896198');
  const [search, setSearch] = React.useState<any>({ i: movieId });
  const [searchedMovies, setSearchedMovies] = React.useState<any>([]);

  const url = Buffer.from(`&i=${movieId}`).toString('base64');

  const http = axios.create({
    baseURL: `http://www.omdbapi.com`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const query = { i: movieId };
  const endpoint = generateUrlWithQuery('/', query);
  console.log(
    'Class: , Function: MoviesProvider, Line 43 endpoint():',
    endpoint,
  );

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

  const handleSearchChange = (e: any) => setSearch(e.target.value);

  const handleSearchSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const searchedMovieData = await http.get(url);
      setSearchedMovies(searchedMovieData);
      setLoading(false);
    } catch (e) {
      console.log('error', e);
    }
  };

  React.useEffect(() => {
    fetchMovie().then(() => setLoading(false));
  }, [url]);

  return (
    <MoviesContext.Provider
      value={{
        movie,
        movieId,
        loading,
        // @ts-expect-error
        setMovieId,
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
export { MoviesProvider, MoviesContext, MoviesConsumer };
