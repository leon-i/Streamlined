import React from 'react';
import axios from 'axios';
import KEYS from '../../config/keys';
import SearchResults from '../search_results/search_results';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            mediaType: 'Show',
            title: '',
            media: '',
            providers: [],
            loading: false,
            done: false,
            errors: ''
        };

        this.PROVIDERS = ['Netflix', 'Hulu', 'HBO', 'AmazonPrimeVideo'];
        this.handleEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    startingAPIkey() {
        return Math.floor(Math.random() * KEYS.length);
    }

    requestMedia(keyIdx) {
        const { mediaType, title } = this.state;
        return axios({
            "method":"GET",
            "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/",
            "headers":{
                "content-type":"application/json",
                "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
                "x-rapidapi-key": KEYS[keyIdx]
            },"params":{
                "Title": title,
                "ProgramType": mediaType
            }
        })
    }

    requestProviders(mediaId, providerName, keyIdx) {
        return axios({
            "method":"GET",
            "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/",
            "headers":{
                "content-type":"application/json",
                "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
                "x-rapidapi-key": KEYS[keyIdx]
            },"params":{
                "Ids": mediaId,
                "Providers": providerName
            }
        })
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            this.handleSubmit(e)
        }
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let keyIdx = this.startingAPIkey();
        const providers = [];
        this.setState({ loading: true });
        this.requestMedia(keyIdx).then(response => {
            if (!response.data.ProgramMatches.length) {
                return this.setState({ errors: 'Content not found', loading: false });
            } else {
                const media = response.data.ProgramMatches[response.data.ProgramMatches.length - 1];
                this.setState({ media: media });

                this.requestProviders(media.Id, 'Netflix', (keyIdx + 1) % KEYS.length).then(netflixRes => {
                    if (netflixRes.data.Hits.length) {
                        providers.push('Netflix');
                        this.setState({
                            providers: providers 
                        })
                    }
                })

                this.requestProviders(media.Id, 'Hulu',  (keyIdx + 2) % KEYS.length).then(huluRes => {
                    if (huluRes.data.Hits.length) {
                        providers.push('Hulu');
                        this.setState({
                            providers: providers 
                        })
                    }
                })

                this.requestProviders(media.Id, 'HBO',  (keyIdx + 3) % KEYS.length).then(hboRes => {
                    if (hboRes.data.Hits.length) {
                        providers.push('HBO');
                        this.setState({
                            providers: providers 
                        })
                    }
                })

                this.requestProviders(media.Id, 'AmazonPrimeVideo',  (keyIdx + 4) % KEYS.length).then(amazonRes => {
                    if (amazonRes.data.Hits.length) {
                        providers.push('AmazonPrimeVideo');
                        this.setState({
                            loading: false,
                            done: true,
                            providers: providers 
                        })
                    }
                })
            }
        });
    }

    render() {
        const { loading, done, media, providers } = this.state;
        const resultsRender = done ? (
            <SearchResults media={media} providers={providers} />
        ) : (
            <>
            </>
        )

        const loadingRender = loading ? (
            <FontAwesomeIcon className='loading-icon' icon={faSpinner} spin />
        ) : (
            <>
            </>
        )
        return (
            <section className='search flex'>
                <div className='search-bar flex'>
                    <input type="text" onChange={this.handleChange('title')} onKeyDown={this.handleEnter} />
                    <button onClick={this.handleSubmit}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                { loadingRender }
                { resultsRender }
            </section>
        )
    }
}

export default SearchBar;