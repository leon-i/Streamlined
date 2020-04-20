import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            mediaType: 'Show',
            title: ''
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
                "x-rapidapi-key": "6138274a51msh269470a1a7722bap1995e9jsn605c74420a4d"
            },"params":{
                "Title": title,
                "ProgramType": mediaType
            }
        })
        .then((response)=> {
            debugger
            return response;
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
                "x-rapidapi-key": "8fa59f5fa0mshae4cb094914cd24p18eef6jsn8cd402dcaf0a"
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
        const mediaRes = this.requestMedia();
        const media = mediaRes.data.ProgramMatches[0];
        debugger
        const providerRes = this.requestProviders(media.Id, 'Netflix');
        // this.props.requestSearchResult(this.state);
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