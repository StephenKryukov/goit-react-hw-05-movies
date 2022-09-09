import { http } from './api';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '87a71118ac3447d6d578af620d5589d9';

export const fetchMovies = (page = 1) => {
  return http.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
};

export const fetchMoviesByRequest = (searchRequest, page = 1) => {
  return http.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${searchRequest}`
  );
};

export const fetchMoviesById = movieId => {
  return http.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};

export const fetchCast = movieId => {
  return http.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const fetchReviews = movieId => {
  return http.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
};
