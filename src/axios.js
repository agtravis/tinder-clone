import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://agtravis-tinder-backend.herokuapp.com/',
});

export default instance;
