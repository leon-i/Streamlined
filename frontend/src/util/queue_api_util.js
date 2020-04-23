import Axios from "axios";

export const addToQueue = data => (
    Axios.post('/api/queue', {
        params: data
    })
)

export const fetchQueue = (userId) => (
    Axios.get('/api/users/queue', {
        params: userId
    })
) 