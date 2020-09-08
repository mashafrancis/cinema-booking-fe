export interface SingleMoviePageProps {
  createBooking: (booking) => Promise<any>;
}

export interface SingleMoviePageState {
  error?: any,
  isLoading?: boolean,
  movie?: any;
}
