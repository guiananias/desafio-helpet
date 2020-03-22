import axios from 'axios';
import Constants from 'expo-constants';

const { API_KEY } = Constants.manifest.extra;

export default (query, page) =>
  axios({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
    method: 'GET',
  });
