import React from 'react';
// import axios from 'axios';
import SearchResults from '../search_results/search_results';
import MediaTypeButtons from './media_type_buttons';
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

        this.handleEnter = this.handleEnter.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            this.handleSubmit(e)
        }
    }

    handleClick(mediaType) {
        return (e) => {
            const opposite = mediaType === 'Show' ? 'Movie' : 'Show';
            this.setState({ mediaType: opposite });
        }   
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSearchResult();
        const { mediaType, title } = this.state;
        this.setState({
            loading: true,
            done: false,
            errors: ''
        })

        this.props.requestSearchResult({ mediaType, title }).then(res => {
            return this.setState({
                loading: false,
                done: true
            })
        }).catch(error => {
            return this.setState({
                loading: false,
                errors: 'Content not found'
            })
        });
    }

    render() {
        const { loading, done, errors, mediaType } = this.state;
        const { searchResults } = this.props;
        const result = Object.values(searchResults)[0];
        let media;
        let providers;
        if (result) {
            media = result.media;
            providers = result.providers
        }

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

        const errorsRender = errors ? (
            <h2 className='error-message'>{errors}</h2>
        ) : (
            <>
            </>
        )
        return (
            <section className='search flex'>
                <div className='search-bar flex'>
                    <MediaTypeButtons mediaType={mediaType} handleClick={this.handleClick} />
                    <input type="text" onChange={this.handleChange('title')} onKeyDown={this.handleEnter} />
                    <button onClick={this.handleSubmit}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                { loadingRender }
                { resultsRender }
                { errorsRender }
            </section>
        )
    }
}

export default SearchBar;