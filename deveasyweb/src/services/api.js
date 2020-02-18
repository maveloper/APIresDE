import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9923'
});

export default api;