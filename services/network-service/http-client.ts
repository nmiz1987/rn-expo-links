import axios from 'axios';
import baseUrl from '@/api/baseUrl';

export default function httpClient(token = '') {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: baseUrl,
    headers,
    validateStatus: status => status < 500, // throw only server error
  });
}
