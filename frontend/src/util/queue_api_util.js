import axios from 'axios';

export const fetchQueue = userId => (
    axios.get('api/users/queue', {
        params: userId
    })
);

export const addToQueue = data => (
    axios.post('/api/users/queue', data)
);