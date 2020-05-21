import React from 'react';
import { addToQueue, deleteFromQueue } from '../../actions/queue_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const QueueButton = ({ user, isAuthenticated, searchResults, queue, history, addToQueue, deleteFromQueue }) => {
    let queueItem = Object.values(searchResults)[0];
    const queueItemId = Object.keys(searchResults)[0];
    let payload;
    let buttonText;
    let buttonAction;
    if (!isAuthenticated) {
        buttonText = 'ADD TO QUEUE';
        buttonAction = () => history.push('/login');
    } else if (queue[queueItemId]) {
        queueItem = queue[queueItemId];
        buttonText = 'REMOVE FROM QUEUE';
        payload = { userId: user.id, itemId: queueItem._id, mediaId: queueItem.mediaId };
        buttonAction = () => deleteFromQueue(payload);
    } else {
        buttonText = 'ADD TO QUEUE';
        payload = Object.assign({}, queueItem, { userId: user.id });
        buttonAction = () => addToQueue(payload);
    }

    return (
        <button className='queue-btn' onClick={buttonAction}>{buttonText}</button>
    );
}

const mapStateToProps = ({ entities: { searchResults, queue }, session: { user, isAuthenticated }}) => ({
    searchResults,
    queue,
    user,
    isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    addToQueue: data => dispatch(addToQueue(data)),
    deleteFromQueue: data => dispatch(deleteFromQueue(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QueueButton));