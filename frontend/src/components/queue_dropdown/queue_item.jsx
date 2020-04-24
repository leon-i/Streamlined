import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const QueueItem = ({ queueItem, providers }) => {
    const logoRenders = providers.split(' ').map((provider, idx) => (
        <img key={idx} className='provider-logo-small' src={process.env.PUBLIC_URL + `/${provider}.png`} alt='stream-logo' />
    ));

    return (
        <li className='queue-item flex'>
            <FontAwesomeIcon icon={faTimes} />
            <img className='queue-item-img' src="https://image.tmdb.org/t/p/w500/yGNnjoIGOdQy3douq60tULY8teK.jpg"></img>
            <h2>Westworld</h2>
            <div className='queue-item-providers flex'>
                { logoRenders }
            </div>
        </li>
    )
}

export default QueueItem;