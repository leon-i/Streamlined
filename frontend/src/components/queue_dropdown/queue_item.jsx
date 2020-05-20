import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const QueueItem = ({ currentUser, queueItem, deleteFromQueue }) => {
    const logoRenders = queueItem.providers.map((provider, idx) => (
        <img key={idx} className='provider-logo-small' src={process.env.PUBLIC_URL + `/${provider}.png`} alt='stream-logo' />
    ));

    return (
        <li className='queue-item flex'>
            <FontAwesomeIcon icon={faTimes} onClick={() => deleteFromQueue({userId: currentUser.id, itemId: queueItem._id})} />
            <img className='queue-item-img' src={queueItem.imageURL}></img>
            <h2>{queueItem.title}</h2>
            <div className='queue-item-providers flex'>
                { logoRenders }
            </div>
        </li>
    )
}

export default QueueItem;