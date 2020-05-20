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
            showDropdown: false,
            errors: ''
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddToQueue = this.handleAddToQueue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { user, requestQueue } = this.props;
        if (user) requestQueue(user.id);
    }

    toggleDropdown(e) {
        this.setState({
            showDropdown: !this.state.showDropdown
        });
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

    handleAddToQueue(e) {
        e.preventDefault();
        const { searchResults, user, addToQueue } = this.props;
        const queueItem = Object.values(searchResults)[0];
        const payload = Object.assign({}, queueItem, { userId: user.id });
        addToQueue(payload);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSearchErrors();
        this.props.clearSearchResult();
        const { mediaType, title } = this.state;
        this.setState({
            loading: true,
            done: false,
            errors: ''
        });

        this.props.requestSearchResult({ mediaType, title }).then(res => {
            return this.setState({
                loading: false,
                done: true
            })
        })
    }

    render() {
        const { loading, done, mediaType, showDropdown } = this.state;
        const { searchResults, search } = this.props;
        const result = Object.values(searchResults)[0];
        let media;
        let imageUrl;
        let providers;
        if (result) {
            media = result.media;
            imageUrl = result.imageUrl;
            providers = result.providers;
        }

        const placeholderMessage = mediaType === "Show" ? "Search for a show to see where it's streamed..." 
            : "Search for a movie to see where it's streamed...";

        const resultsRender = done && !search.length ? (
            <SearchResults media={media} imageUrl={imageUrl} providers={providers} handleAddToQueue={this.handleAddToQueue} />
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

        const errorsRender = search.length ? (
            <h2 className='error-message'>Content not found.</h2>
        ) : (
            <>
            </>
        )
        return (
            <section className='search flex'>
                <div className='outer-search-bar flex'>
                    <MediaTypeButtons mediaType={mediaType} 
                    handleClick={this.handleClick} 
                    toggleDropdown={this.toggleDropdown}
                    showDropdown={showDropdown} />
                    <div className='search-bar flex'>
                        <input type="text" 
                            onChange={this.handleChange('title')} 
                            onKeyDown={this.handleEnter} 
                            placeholder={placeholderMessage} />
                        <button className='search-btn' onClick={this.handleSubmit}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                { loadingRender }
                { resultsRender }
                { errorsRender }
            </section>
        )
    }
}

export default SearchBar;