import * as QueueAPIUtil from '../util/queue_api_util';

export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const RECEIVE_QUEUE_ITEM = 'RECEIVE_QUEUE_ITEM';
export const REMOVE_FROM_QUEUE = 'REMOVE_FROM_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';

const receiveQueue = queue => ({
    type: RECEIVE_QUEUE,
    queue
});

const receiveQueueItem = queueItem => ({
    type: RECEIVE_QUEUE_ITEM,
    queueItem
});

const removeFromQueue = queueItemId => ({
    type: REMOVE_FROM_QUEUE,
    queueItemId
});

export const clearQueue = () => ({
    type: CLEAR_QUEUE
});

export const requestQueue = userId => dispatch =>
    QueueAPIUtil.fetchQueue(userId).then(queue => dispatch(receiveQueue(queue)));

export const addToQueue = data => dispatch =>
    QueueAPIUtil.addToQueue(data).then(queueItem => dispatch(receiveQueueItem(queueItem)));

export const deleteFromQueue = data => dispatch =>
    QueueAPIUtil.deleteFromQueue(data).then(queueItem => dispatch(removeFromQueue(queueItem)));