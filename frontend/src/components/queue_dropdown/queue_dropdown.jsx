import React from 'react';
import QueueItem from './queue_item';
import QueueCalculator from './queue_calculator';
import '../../stylesheets/queue_dropdown.css';

// const calculateStartingCost = (providers) => {
//     let cost = 0;
//     if (providers.includes('Netflix')) cost += 13;
//     if (providers.includes('Hulu')) cost += 6;
//     if (providers.includes('HBO')) cost += 15;
//     if (providers.includes('AmazonPrimeVideo')) cost += 9;
//     return cost;
// }

const QueueDropdown = React.forwardRef(({ currentUser, queue, showQueue, deleteFromQueue }, ref) => {
    if (!currentUser) return null;
    const dropdownName = showQueue ? 'queue-dropdown-show flex' : 'queue-dropdown-hide';
    const queueItems = Object.values(queue).map(queueItem => (
        <QueueItem currentUser={currentUser} queueItem={queueItem} deleteFromQueue={deleteFromQueue} />
    ));
    return (
        <div className={dropdownName} ref={ref}>
            <h2>{`${currentUser.username}'s Queue`}</h2>
            <section className='queue-list-container'>
                <ul className='queue-list flex'>
                    { queueItems }
                </ul>
            </section>
            <button className='clear-queue-btn'>CLEAR QUEUE</button>
            <QueueCalculator providers={['Netflix', 'Hulu']} />
        </div>
    )
});

export default QueueDropdown;