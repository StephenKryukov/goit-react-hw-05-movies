import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import BackButton from 'components/BackButton/BackButton';
import MovieCard from 'components/MovieCard/MovieCard';

import { fetchMoviesById } from '../../services/fetchMovies';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchMoviesById(movieId).then(data => {
        const {
          id,
          backdrop_path,
          title,
          release_date,
          popularity,
          overview,
          genres,
        } = data.data;
        const object = {
          id,
          backdrop_path,
          title,
          release_date,
          popularity,
          overview,
          genres,
        };
        setMovie(object);
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  return (
    <>
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      <>
        {isLoading && <div>Loading...</div>}
        <BackButton />
        <div>{movie && <MovieCard movie={movie} />}</div>
        <Outlet />
      </>
    </>
  );
}
