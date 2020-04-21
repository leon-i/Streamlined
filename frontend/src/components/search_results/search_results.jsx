import React from 'react';
import '../../stylesheets/search_results.css';
// import { Link } from 'react-redux';

const SearchResults = ({ media, providers }) => {
    const providersRender = providers.map(provider => (
        <li>
            <a href={`https://${provider}.com`}>{provider}</a>
        </li>
    ));

    const runtimeRender = media.ProgramType === 'Movie' ? (
        <h2>{media.Runtime}</h2>
    ) : (
        <>
        </>
    )
    return (
        <div className='result flex'>
            <section className='result-left flex'>
                <a href={media.OfficialSiteUrl}>
                    <h1>{media.Title}</h1>
                </a>
                <div className='poster-container'>
                </div>
            </section>
            <section className='result-right flex'>
                <div className='right-inner flex'>
                    <section className='result-details flex'>
                        <h2>{media.Year}</h2>
                        {runtimeRender}
                    </section>
                    <p>{media.Descriptions[0].Description}</p>
                </div>
                <ul className='providers flex'>
                    {providersRender}
                </ul>
            </section>
            
        </div>
    )
}

export default SearchResults;