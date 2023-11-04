import axios from 'axios';

const _baseUrl = 'https://netanel-server.vercel.app';

export default function httpClient(token = '') {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: _baseUrl,
    headers,
  });
}
