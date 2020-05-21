import axios from 'axios';

export const fetchQueue = userId => (
    axios.get('api/users/queue', {
        params: userId
    })
);

export const addToQueue = data => (
    axios.post('/api/users/queue', data)
);

export const deleteFromQueue = data => (
    axios.delete('api/users/queue', {
        params: data
    })
);

export const emptyQueue = userId => (
    axios.delete('api/users/queue/clear', {
        params: userId
    })
);