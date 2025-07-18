import axios from 'axios';

const api = axios.create(
    {
        "baseURL": 'http://localhost:8000/api',
        "responseType": 'json',
        "timeout": 6000,
    }
);
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    //config.headers.Authorization = `Bearer ${token}`;
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default api;