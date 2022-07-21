import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';

// const tmdb = axios.create({
//   baseURL: baseUrl,
//   params: {
//     api_key: API_KEY,
//   },
// });

const tmdb = (parameters) => {
  parameters['api_key'] = API_KEY
  return axios.create({
    baseURL: baseUrl,
    params: parameters,
  });
}

export default tmdb;
