import axios from 'axios';

export default (query, page) =>
  axios({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=6e09219c6174d28a7f04d7d8467efd6f&language=en-US&query=${query}&page=${page}&include_adult=false`,
    method: 'GET',
  });
