import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '64941d9c048dcb2fddefbcc98313b7a0';

export const fetchTrendingMovies = async signal => {
  const response = await axios.get('/trending/movie/day', {
    signal: signal,
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchMovies = async (signal, query) => {
  const response = await axios.get('/search/movie', {
    signal: signal,
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (signal, movie_id) => {
  const response = await axios.get(`/movie/${Number(movie_id)}`, {
    signal: signal,
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchMovieCast = async (signal, movie_id) => {
  const response = await axios.get(`/movie/${Number(movie_id)}/credits`, {
    signal: signal,
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchMovieReviews = async (signal, movie_id) => {
  const response = await axios.get(`/movie/${Number(movie_id)}/reviews`, {
    signal: signal,
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
