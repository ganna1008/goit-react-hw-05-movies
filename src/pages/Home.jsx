import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchTrendingMovies } from 'api';
import { TrendingMoviesList } from 'components/TrendingMoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getTrendingMovies() {
      try {
        const moviesAPI = await fetchTrendingMovies(signal);
        setTrendingMovies(moviesAPI.results);
      } catch (error) {
        if (error.message === 'canceled') {
          console.error(error);
          return;
        }
        toast.error('Movies not found. Please try it again.');
      }
    }

    getTrendingMovies();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <main>
        <h1>Trending today</h1>
        <TrendingMoviesList
          movies={trendingMovies}
          state={{ from: location }}
        />
      </main>
    </>
  );
};

export default Home;
