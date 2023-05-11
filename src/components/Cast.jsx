import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovieCast } from 'api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getMovieCast() {
      try {
        const moviesCastAPI = await fetchMovieCast(signal, movieId);
        setCast(moviesCastAPI.cast);
      } catch (error) {
        if (error.message === 'canceled') {
          console.error(error);
          return;
        }
        toast.error("Movies's Cast not found. Please try it again.");
      }
    }

    getMovieCast();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section>
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.original_name}
                />
              )}
              <h3>{actor.original_name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Cast;
