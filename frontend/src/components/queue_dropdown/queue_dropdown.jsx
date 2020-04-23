import React from 'react';
import QueueItem from './queue_item';
import '../../stylesheets/queue_dropdown.css'

const QueueDropdown = React.forwardRef(({ currentUser, showQueue }, ref) => {
    if (!currentUser) return null;
    const dropdownName = showQueue ? 'queue-dropdown-show flex' : 'queue-dropdown-hide';
    // const queueItems = currentUser.queue.map(queueItem => (
    //     <QueueItem queueItem={queueItem} />
    // ))
    return (
        <div className={dropdownName} ref={ref}>
            <h2>{`${currentUser.username}'s Queue`}</h2>
            <section className='queue-list-container'>
                <ul className='queue-list flex'>
                    <QueueItem providers='Netflix Hulu HBO AmazonPrimeVideo' />
                    <QueueItem providers='Netflix Hulu' />
                    <QueueItem providers='Netflix AmazonPrimeVideo' />
                    <QueueItem providers='Netflix Hulu HBO' />
                </ul>
            </section>
            <button className='clear-queue-btn'>CLEAR QUEUE</button>
            <section className='queue-cost flex'>
                <h2>Total cost:</h2>
                <p>$50</p>
            </section>
        </div>
    )
});

export default QueueDropdown;