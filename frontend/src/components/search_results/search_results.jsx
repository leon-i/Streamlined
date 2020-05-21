import React from 'react';
import QueueButton from './queue_button';
import '../../stylesheets/search_results.css';

const SearchResults = ({ media, imageUrl, providers }) => {
    if (!media || !imageUrl || !providers) return null;
    const providersRender = providers.map((provider, idx) => (
        <li key={idx}>
            <a href={`https://${provider}.com`}>
                <img className='provider-logo' src={process.env.PUBLIC_URL + `/${provider}.png`} alt='stream-logo' /> 
            </a>
        </li>
    ));

    const runtimeRender = media.ProgramType === 'Movie' ? (
        <div className='runtime flex'>
            <h2>Runtime:</h2>
            <p>{media.Runtime} minutes</p>
        </div>
    ) : (
        <>
        </>
    );

    const descriptionText = media.Descriptions && media.Descriptions.length ? media.Descriptions[0].Description : 'No description available.';

    return (
        <>
        <div className='result flex'>
            <section className='result-left flex'>
                <a href={media.OfficialSiteUrl}>
                    <h1>{media.Title}</h1>
                </a>
                <div className='poster-container'>
                    <img className='result-backdrop' src={imageUrl} alt="poster"/>
                </div>
            </section>
            <section className='result-right flex'>
                <div className='right-inner flex'>
                    <section className='result-description'>
                        <h2>Description</h2>
                        <p>{descriptionText}</p>
                    </section>
                    <section className='result-details flex'>
                        <div className='result-details-left flex'>
                            <div className='release-date flex'>
                                <h2>Released:</h2>
                                <p>{media.Year}</p>
                            </div>
                            { runtimeRender }
                        </div>
                        {/* <button className='queue-btn' onClick={handleAddToQueue}>ADD TO QUEUE</button> */}
                        <QueueButton />
                    </section>
                </div>
                <div className='providers-container'>
                    <h1>Available on:</h1>
                    <ul className='provider-list flex'>
                        {providersRender}
                    </ul>
                </div>
            </section>
        </div>
        </>
    )
}

export default SearchResults;