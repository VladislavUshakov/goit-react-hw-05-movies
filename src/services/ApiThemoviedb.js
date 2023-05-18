import axios from 'axios';
import { BASE_URL } from 'consts/consts';

const API_KEY = '62131b7b1ee5052310faee41079105b8';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async (page = 1) => {
  const response = await axios('trending/movie/day', {
    params: {
      page,
    },
  });
  return response.data;
};

export const getSearchedMovies = async query => {
  const response = await axios('/search/movie', {
    params: {
      query,
    },
  });
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios(`/movie/${id}`);
  return response.data;
};

export const getMovieСredits = async id => {
  const response = await axios(`/movie/${id}/credits`);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios(`/movie/${id}/reviews`);
  return response.data;
};
