import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { POSTER_BASE_URL } from 'consts/consts';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, title, poster_path }) => (
        <li className={css.movieItem} key={id}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={css.movieItemContent}
          >
            <div className={css.thumb}>
              <img
                src={`${POSTER_BASE_URL}${poster_path}`}
                alt={title}
                width={150}
              />
            </div>
            <p className={css.movieItemTitle}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
