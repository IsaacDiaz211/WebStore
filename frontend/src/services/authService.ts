//import axios from 'axios';
import api from '../utils/axios.config';

export const login = (email: string, password: string) => {
  return api.post('/auth/login', { email, password });
};

export const register = (data: {
  name: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return api.post('/auth/register', data);
};
