import axios from 'axios';
export const ApiManager = axios.create({
  baseURL: 'https://api-staging.simpledairy.com/api/v1/auth',
  responseType: 'json',
  withCredentials: true,
});
