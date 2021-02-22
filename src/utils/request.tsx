import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'x-ratelimit-limit': '6000',
  },
});

export default request;
