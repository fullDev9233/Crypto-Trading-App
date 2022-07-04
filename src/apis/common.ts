import axios from 'axios';
import API_ENDPOINT from '../config';

export default axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length',
  },
});

export const setHeaders = (token: string) => {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return header;
};
