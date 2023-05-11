import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const SearchedMovieList = ({ movies, state }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={state}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

SearchedMovieList.propTypes = {
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
