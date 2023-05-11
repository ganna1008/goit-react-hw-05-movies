import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovieDetails } from 'api';
import {
  Backlink,
  Container,
  GenreList,
  SubPages,
} from './MovieDetails.styled';
import { useRef, Suspense } from 'react';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getMovieDetails() {
      try {
        const moviesDetailsAPI = await fetchMovieDetails(signal, movieId);
        setMovieDetails(moviesDetailsAPI);
      } catch (error) {
        if (error.message === 'canceled') {
          console.error(error);
          return;
        }
        toast.error('Movie Details not found. Please try it again.');
      }
    }

    getMovieDetails();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  const {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {movieDetails && (
        <main>
          <Link to={backLinkLocationRef.current}>
            <Backlink>&#8592; Go back</Backlink>
          </Link>
          <Container>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                alt={original_title}
              />
            )}
            <div>
              <h1>
                {original_title}({release_date?.slice(0, 4)})
              </h1>
              <p>User score: {vote_average}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genries</h3>
              <GenreList>
                {genres?.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </GenreList>
            </div>
          </Container>
          <SubPages>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </SubPages>
          <Suspense fallback={<div>Loading1...</div>}>
            <Outlet />
          </Suspense>
        </main>
      )}
    </>
  );
};

export default MovieDetails;
