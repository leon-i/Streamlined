import React from 'react';
import axios from 'axios';
import KEYS from '../../config/keys';

class SearchBar extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            mediaType: 'Show',
            title: '',
            media: '',
            providers: [],
            done: false,
            errors: ''
        };

        this.PROVIDERS = ['Netflix', 'Hulu', 'HBO', 'AmazonPrimeVideo'];
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

    // requestMedia() {
    //     const { mediaType, title } = this.state;
    //     axios({
    //         "method":"GET",
    //         "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/",
    //         "headers":{
    //             "content-type":"application/json",
    //             "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "ff0bd0bd75msh1ff9e2cc41c3334p19d376jsn54e9c50d9a13"
    //         },"params":{
    //             "Title": title,
    //             "ProgramType": mediaType
    //         }
    //     })
    //     .then((response)=> {
    //         const media = response.data.ProgramMatches[response.data.ProgramMatches.length - 1];
    //         this.setState({ media: media });
    //         axios({
    //             "method":"GET",
    //             "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/",
    //             "headers":{
    //                 "content-type":"application/json",
    //                 "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
    //                 "x-rapidapi-key": "ff0bd0bd75msh1ff9e2cc41c3334p19d376jsn54e9c50d9a13"
    //             },"params":{
    //                 "Ids": this.state.media.Id,
    //                 "Providers": 'Netflix'
    //             }
    //         })
    //         .then ((response2) => {
    //             if (response2.data.Hits.length) {
    //                 this.setState({ providers: 'Netflix' });
    //             }
    //             debugger
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let keyIdx = this.startingAPIkey();
        const providers = [];
        this.requestMedia(keyIdx).then(response => {
            if (!response.data.ProgramMatches.length) {
                return this.setState({ errors: 'Content not found'});
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
                            done: true,
                            providers: providers 
                        })
                    }
                })
            }
        });
    }

    render() {
        const { done, providers } = this.state;
        const testRender = done ? (
            <div>
                {providers.join(' ')}
            </div>
        ) : (
            <>
            </>
        )
        return (
            <>
                <input type="text" onChange={this.handleChange('title')}/>
                <button onClick={this.handleSubmit}>Submit</button>
                { testRender }
            </>
        )
    }
}

export default SearchBar;