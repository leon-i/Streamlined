import axios from 'axios';

export const search = query => {
    return axios.get('/api/search/', {
        params: query
    });
};