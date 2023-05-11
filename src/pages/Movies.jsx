// import { ProductList } from "../components/ProductList";
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovies } from 'api';
import { SearchBox } from 'components/SearchBox';

import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchedMovieList } from 'components/SearchedMovieList';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('query') ?? '';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (movieTitle === '') return;
    async function getMovieDetails() {
      try {
        const moviesAPI = await fetchMovies(signal, movieTitle);
        setMovies(moviesAPI.results);
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
  }, [movieTitle]);

  // const visibleMovies = movies.filter(movie =>
  //   movie.title.toLowerCase().includes(movieTitle.toLowerCase())
  // );

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formValue = form.elements.input.value;

    if (formValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: formValue });
    form.reset();
  };

  return (
    <>
      <main>
        <SearchBox onSubmit={handleSubmit} />
        {movies && (
          <SearchedMovieList movies={movies} state={{ from: location }} />
        )}
        {movies?.length === 0 && searchParams.size > 0 && (
          <p>There are no movies that match your search.</p>
        )}
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Movies;
