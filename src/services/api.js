import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

export default (query, page) =>
  axios({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
    method: 'GET',
  });
