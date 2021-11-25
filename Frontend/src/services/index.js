import axios from 'axios';
import 'dotenv-safe/config';

const api = axios.create({
  baseURL: process.env.PORT,
});

export { api };
