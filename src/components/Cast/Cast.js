import { POSTER_BASE_URL } from 'consts/consts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieСredits } from 'services/ApiThemoviedb';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const trySetMovieDetails = async () => {
      try {
        const response = await getMovieСredits(movieId);
        setCast(response.cast);
      } catch {
        setError(true);
      }
    };
    trySetMovieDetails();
  }, [movieId]);

  if (error) {
    return (
      <>
        <p>Cast not found</p>
      </>
    );
  }

  return (
    <ul>
      {cast?.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            className={css.castImage}
            src={`${POSTER_BASE_URL}${profile_path}`}
            alt={name}
          ></img>
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
