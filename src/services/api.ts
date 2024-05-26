import axios from 'axios';
import {API_HOST, API_KEY, BASE_URL} from '../../env';

const axiosConfig = {
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RappidAPI-Host': API_HOST,
  },
};

const api = axios.create(axiosConfig);

api.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    const apiErrorObject = error.response.data.error;
    const source: string = error.response.data.debug.source;

    throw Error(JSON.stringify({apiErrorObject, source}));
  },
);

export default api;
