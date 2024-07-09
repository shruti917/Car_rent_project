
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.carapi.app', // Base URL for CarAPI
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

