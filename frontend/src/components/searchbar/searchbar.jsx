import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            mediaType: 'Show',
            title: '',
            media: '',
            providers: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    requestMedia() {
        const { mediaType, title } = this.state;
        axios({
            "method":"GET",
            "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/",
            "headers":{
                "content-type":"application/json",
                "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
                "x-rapidapi-key": "ff0bd0bd75msh1ff9e2cc41c3334p19d376jsn54e9c50d9a13"
            },"params":{
                "Title": title,
                "ProgramType": mediaType
            }
        })
        .then((response)=> {
            const media = response.data.ProgramMatches[response.data.ProgramMatches.length - 1];
            this.setState({ media: media });
            axios({
                "method":"GET",
                "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/",
                "headers":{
                    "content-type":"application/json",
                    "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
                    "x-rapidapi-key": "ff0bd0bd75msh1ff9e2cc41c3334p19d376jsn54e9c50d9a13"
                },"params":{
                    "Ids": this.state.media.Id,
                    "Providers": 'Netflix'
                }
            })
            .then ((response2) => {
                if (response2.data.Hits.length) {
                    this.setState({ providers: 'Netflix' });
                }
                debugger
            })
            .catch((error)=>{
                console.log(error)
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    requestProviders(mediaId, providerName) {
        axios({
            "method":"GET",
            "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/",
            "headers":{
                "content-type":"application/json",
                "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
                "x-rapidapi-key": "ff0bd0bd75msh1ff9e2cc41c3334p19d376jsn54e9c50d9a13"
            },"params":{
                "Ids": mediaId,
                "Providers": providerName
            }
            })
            .then((response)=>{
              return response;
            })
            .catch((error)=>{
              console.log(error)
        })
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.requestMedia().then(response => {
        //     const media = response.data.ProgramMatches[0];
        //     this.setState({ media: media });
        //     this.requestProviders(media.Id, 'Netflix').then(providerRes => {
        //         if (providerRes.data.Hits.length) {
        //             this.setState({ providers: 'Netflix' });
        //         }
        //     })
        // });
        this.requestMedia();

        debugger
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.handleChange('title')}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </>
        )
    }
}

export default SearchBar;