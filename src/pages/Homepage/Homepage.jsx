import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { fetchMovies } from '../../services/fetchMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchMovies().then(data => {
        const mappedMovies = data.data.results.map(({ id, title }) => ({
          id,
          title,
        }));
        setMovies(mappedMovies);
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      <div>
        <h1>Trending</h1>
        {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
        <MovieGallery movies={movies} prevLocation={location} />
        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};

export default HomePage;
