import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TrendingMoviesList = ({ movies, state }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`} state={state}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  state: PropTypes.shape({
    from: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
