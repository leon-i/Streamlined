import Axios from "axios";

export const addToQueue = data => (
    Axios.post('/api/queue', {
        params: data
    })
)