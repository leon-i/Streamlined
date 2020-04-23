import * as QueueApiUtil from '../util/queue_api_util'
export const RECEIVE_QUEUE = "RECEIVE_QUEUE";



export const addToQueue = (data) => (dispatch) => QueueApiUtil.addToQueue(data);