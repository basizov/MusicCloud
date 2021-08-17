import axios from 'axios';
import config from '../configuration/config';
import interseptors from './interseptors';

const instance = axios.create({
  withCredentials: true,
  baseURL: config.API_URL
});

interseptors(instance);

export default instance;
