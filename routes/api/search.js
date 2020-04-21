const express = require("express");
const router = express.Router();
// const unirest = require("unirest");
// const request = require("request");
// const axios = require('axios');
const keys = require('../../config/keys');
const apiKeys = keys.apiKeys;

const PROVIDERS = ['Netflix', 'AmazonPrimeVideo', 'Hulu', 'HBO'];

router.get('/', (req, res) => {
    const query = JSON.parse(req.query.query);
    const mediaType = query.mediaType; //'Show' or 'Movie'
    const title = query.title;
    const showOrMovie = { providers: [] };
    const startingIdx = startingAPIkey();
    const firstKey = apiKeys[startingIdx];
    const response = requestMovieOrShow(mediaType, title, firstKey);
    
    if (!response.ProgramMatches.length) return res.status(404).json({email: "Movie/show not found."});
    const media = response.ProgramMatches[0];
    showOrMovie['media'] = media;

    for (let i = 0; i < PROVIDERS.length; i++) {
        const currentKeyIdx = (startingIdx + 1) % PROVIDERS.length;
        const providerResponse = requestProviders(media.Id, PROVIDERS[i], apiKeys[currentKeyIdx]);
        if (providerResponse.Hits.length) {
            showOrMovie.providers.push(Providers[i]);
        }
    }

    return res.json(showOrMovie);
})

const requestMovieOrShow = (mediaType, title, apiKey) => {
    // const req = unirest("GET", "https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/");

    // req.query({
    //     "Title": title,
    //     "ProgramType": mediaType
    // });

    // req.headers({
    //     "x-rapidapi-host": "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
    //     "x-rapidapi-key": apiKey,
    //     "content-type": "application/json"
    // });

    // req.end((res) => {
    //     if (res.error) throw new Error(res.error);

    //     return res.body;
    // });


    axios({
            "method":"GET",
            "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/match/",
            "headers":{
                "content-type":"application/json",
                "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
                "x-rapidapi-key": apiKey
            },"params":{
                "Title": title,
                "ProgramType": mediaType
            }
        })
        .then((response)=>{
            return response;
        })
        .catch((error)=>{
            console.log(error)
    })
}

const requestProviders = (mediaId, providerName, apiKey) => {
    // const options = {
    //     method: 'GET',
    //     url: 'https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/',
    //     qs: {Ids: mediaId, Providers: providerName},
    //     headers: {
    //         'x-rapidapi-host': 'ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com',
    //         'x-rapidapi-key': apiKey,
    //         'content-type': 'application/json'
    //     }
    // };

    // request(options, (error, response, body) => {
    //     if (error) throw new Error(error);

    //     return body;
    // });
    axios({
        "method":"GET",
        "url":"https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/",
        "headers":{
            "content-type":"application/json",
            "x-rapidapi-host":"ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
            "x-rapidapi-key": apiKey
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

const startingAPIkey = () => (
    Math.floor(Math.random() * PROVIDERS.length)
);

module.exports = router;