import * as QueueApiUtil from '../util/queue_api_util'
import {receiveCurrentUser} from '../actions/session_actions'

export const RECEIVE_QUEUE = "RECEIVE_QUEUE";
const receiveQueue = queue => ({
    type: RECEIVE_QUEUE,
    queue
})

export const addToQueue = (data) => (dispatch) =>
         QueueApiUtil.addToQueue(data).then((user) =>
           dispatch(receiveCurrentUser(user))
         );