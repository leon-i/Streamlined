import React from 'react';
import '../../stylesheets/search_results.css';
// import { Link } from 'react-redux';

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

    // const testRender = (
    //     <div className='result flex'>
    //     <section className='result-left flex'>
    //         <a href='https://www.google.com'>
    //             <h1>Game of Thrones</h1>
    //         </a>
    //         <div className='poster-container'>
    //         </div>
    //     </section>
    //     <section className='result-right flex'>
    //         <div className='right-inner flex'>
    //             <section className='result-description'>
    //                 <h2>Description</h2>
    //                 <p>Directed by Academy Award® winner Steven Spielberg, Jaws set the standard for edge-of-your seat suspense 
    //                     quickly becoming a cultural phenomenon and forever changing the movie industry. When the seaside community of Amity finds 
    //                     itself under attack by a dangerous great white shark, the town's chief of police (Roy Scheider), a young marine biologist 
    //                     (Richard Dreyfuss) and a grizzled shark hunter (Robert Shaw) embark on a desperate quest to destroy the beast before it strikes 
    //                     again. Featuring an unforgettable score that evokes pure terror, Jaws remains one of the most influential and gripping 
    //                     adventures in motion picture history.</p>
    //             </section>
    //             <section className='result-details flex'>
    //                 <div className='release-date flex'>
    //                     <h2>Released:</h2>
    //                     <p>2011</p>
    //                 </div>
    //                 <div className='runtime flex'>
    //                     <h2>Runtime:</h2>
    //                     <p>100 minutes</p>
    //                 </div>
    //             </section>
                
    //         </div>
    //         <div className='providers-container'>
    //             <h1>Available on:</h1>
    //             <ul className='provider-list flex'>
    //                 <li>
    //                     <img className='provider-logo' src={process.env.PUBLIC_URL + `/Netflix.png`} alt='stream-logo' /> 
    //                 </li>
    //                 <li>
    //                     <img className='provider-logo' src={process.env.PUBLIC_URL + `/Hulu.png`} alt='stream-logo' />
    //                 </li>
    //                 <li>
    //                     <img className='provider-logo' src={process.env.PUBLIC_URL + `/HBO.png`} alt='stream-logo' />
    //                 </li>
    //                 <li>
    //                     <img className='provider-logo' src={process.env.PUBLIC_URL + `/AmazonPrimeVideo.png`} alt='stream-logo' />
    //                 </li>
    //             </ul>
    //         </div>
    //     </section>
    // </div>
    // )
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
                        <button className='queue-btn'>ADD TO QUEUE</button>
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