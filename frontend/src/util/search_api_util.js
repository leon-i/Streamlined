import axios from 'axios';

export const search = query => {
    debugger
    return axios.get('/api/search/', {
        params: { query }
    });
};