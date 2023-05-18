import { POSTER_BASE_URL } from 'consts/consts';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/ApiThemoviedb';
import css from './MovieCard.module.css';
import Spiner from 'components/Spiner/Spiner';

const MovieCard = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const RefLocation = useRef(location);

  const from = RefLocation.current?.state?.from;
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  useEffect(() => {
    const trySetMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovieDetails(response);
      } catch {
        setError(true);
      }
    };
    trySetMovieDetails();
  }, [movieId]);

  if (error) {
    return (
      <>
        <p>Details not found</p>
      </>
    );
  }

  return (
    <>
      <div className={css.backBtn}>
        <Link to={from ?? '/'}>Go back</Link>
      </div>
      <div className={css.about}>
        <img
          className={css.aboutPoster}
          src={`${POSTER_BASE_URL}${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <p>User score: {`${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={css.ganresList}>
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul className={css.informationList}>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieCard;
