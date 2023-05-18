import MoviesList from 'components/MoviesList';
import Search from 'components/Search/Search';
import Spiner from 'components/Spiner';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from 'services/ApiThemoviedb';

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInputValue(params.get('query'));
  }, [params]);

  useEffect(() => {
    if (inputValue) {
      const trySetMovies = async () => {
        try {
          setIsLoading(true);
          setMovies([]);
          const response = await getSearchedMovies(inputValue);
          setMovies(response.results);
        } catch {
          setMovies([]);
        } finally {
          setIsLoading(false);
        }
      };
      trySetMovies();
    }
  }, [inputValue]);

  const searchHandler = e => {
    e.preventDefault();
    const { value } = e.target.query;

    value
      ? setParams(p => ({ ...p, query: value }))
      : setParams(p => ({ ...p }));
  };

  return (
    <main>
      <Search inputValue={inputValue} searchHandler={searchHandler} />
      {isLoading && <Spiner />}
      {inputValue && <MoviesList movies={movies} />}
    </main>
  );
};

export default MoviesPage;
