import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

const createResource = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  return instance;
};

export default createResource();
