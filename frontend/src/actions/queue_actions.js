import * as QueueApiUtil from "../util/queue_api_util";

export const RECEIVE_QUEUE = "RECEIVE_QUEUE";
export const RECEIVE_QUEUES = "RECEIVE_QUEUES";

const receiveQueue = (queue) => ({
  type: RECEIVE_QUEUE,
  queue,
});

export const addToQueue = (data) => (dispatch) =>
  QueueApiUtil.addToQueue(data).then((queue) => dispatch(receiveQueue(queue)));

export const requestQueue = (userId) => (dispatch) =>
  QueueApiUtil.fetchQueue(userId).then((queue) =>
    dispatch(receiveQueue(queue))
  );

export const removeFromQueue = (data) => (dispatch) =>
  QueueApiUtil.deleteFromQueue(data).then((queue) => {
    debugger;
    console.log("deleted!");
    return dispatch(receiveQueue(queue));
  });
