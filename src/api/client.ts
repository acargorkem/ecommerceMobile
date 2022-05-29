import axios from 'axios';
import config from '../utils/config';

export default axios.create({
  baseURL: config.API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
  timeout: 1000 * 10,
});
