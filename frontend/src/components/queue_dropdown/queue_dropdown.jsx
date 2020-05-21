import React from 'react';
import QueueItem from './queue_item';
import QueueCalculator from './queue_calculator';
import '../../stylesheets/queue_dropdown.css';

const QueueDropdown = React.forwardRef(({ currentUser, queue, showQueue, deleteFromQueue, emptyQueue }, ref) => {
    if (!currentUser) return null;
    const dropdownName = showQueue ? 'queue-dropdown-show flex' : 'queue-dropdown-hide';
    const providers = Object.values(queue).map(item => item.providers).flat();
    const uniqueProviders = [ ...new Set(providers) ];
    const queueItems = Object.values(queue).map((queueItem, idx) => (
        <QueueItem key={idx} currentUser={currentUser} queueItem={queueItem} deleteFromQueue={deleteFromQueue} />
    ));
    return (
        <div className={dropdownName} ref={ref}>
            <h2>{`${currentUser.username}'s Queue`}</h2>
            <section className='queue-list-container'>
                <ul className='queue-list flex'>
                    { queueItems }
                </ul>
            </section>
            <button className='clear-queue-btn' onClick={() => emptyQueue(currentUser.id)}>CLEAR QUEUE</button>
            <QueueCalculator providers={uniqueProviders} />
        </div>
    )
});

export default QueueDropdown;