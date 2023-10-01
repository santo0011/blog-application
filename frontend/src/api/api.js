import axios from 'axios';

const local = 'http://localhost:5000';

export const base_url = 'http://localhost:3000';

const api = axios.create({
    baseURL: `${local}/api`,
    withCredentials: true
});


export default api;