import axios from 'axios';

export const login = (email: string, password: string) => {
  return axios.post('/auth/login', { email, password });
};

export const register = (data: {
  name: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return axios.post('/auth/register', data);
};
