import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/ApiThemoviedb';
import MoviesList from 'components/MoviesList';
import Spiner from 'components/Spiner';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const trySetMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getTrendingMovies();
        setMovies(response.results);
      } catch {
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    trySetMovies();
  }, []);

  return (
    <main>
      {isLoading && <Spiner />}
      <MoviesList movies={movies} />
    </main>
  );
};

export default HomePage;
