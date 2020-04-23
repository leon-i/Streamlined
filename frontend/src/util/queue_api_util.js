import axios from "axios";

export const addToQueue = data => (
    axios.post('/api/queue', {
        params: data
    })
)

// export const fetchQueue = (userId) => (
//     Axios.get('/api/users/queue', {
//         params: userId
//     })
// ) 

export const fetchQueue = (userId) => {
    return axios.get('/api/users/queue', {
        params: userId
    })
}