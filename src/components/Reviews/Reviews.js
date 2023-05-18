import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/ApiThemoviedb';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const trySetMovieDetails = async () => {
      try {
        const response = await getMovieReviews(movieId);
        const data = response.results;

        data.length ? setReviews(data) : setError(true);
      } catch {
        setError(true);
      }
    };
    trySetMovieDetails();
  }, [movieId]);

  if (error) {
    return (
      <>
        <p>Reviews not found</p>
      </>
    );
  }

  return (
    <ul>
      {reviews?.map(({ id, author, content }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
