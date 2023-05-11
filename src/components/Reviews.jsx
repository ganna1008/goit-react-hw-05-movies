import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovieReviews } from 'api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getMovieReviews() {
      try {
        const moviesReviewsAPI = await fetchMovieReviews(signal, movieId);
        setReviews(moviesReviewsAPI.results);
      } catch (error) {
        if (error.message === 'canceled') {
          console.error(error);
          return;
        }
        toast.error("Movies's reviews not found. Please try it again.");
      }
    }

    getMovieReviews();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p> {review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </section>
    </>
  );
};

export default Reviews;
