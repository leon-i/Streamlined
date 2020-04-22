const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys');
const KEYS = keys.apiKeys;

router.get('/', (req, res) => {
    const { mediaType, title } = req.query;
    const keyIdx = startingAPIkey();
    const searchResult = {
        media: '',
        providers: []
    }

    requestMedia(mediaType, title, keyIdx).then(response => {
        if (!response.data.ProgramMatches.length) {
            return res.status(400).json({ errors: 'Content not found' });
        } else {
            const media = response.data.ProgramMatches[response.data.ProgramMatches.length - 1];
            searchResult.media = media;

            requestProviders(media.Id, 'Netflix', (keyIdx + 1) % KEYS.length).then(netflixRes => {
                if (netflixRes.data.Hits.length) {
                    searchResult.providers.push('Netflix');
                }

                requestProviders(media.Id, 'Hulu', (keyIdx + 2) % KEYS.length).then(huluRes => {
                    if (huluRes.data.Hits.length) {
                        searchResult.providers.push('Hulu');
                    }

                    requestProviders(media.Id, 'HBO', (keyIdx + 3) % KEYS.length).then(hboRes => {
                        if (hboRes.data.Hits.length) {
                            searchResult.providers.push('HBO');
                        }

                        requestProviders(media.Id, 'AmazonPrimeVideo', (keyIdx + 4) % KEYS.length).then(amazonRes => {
                            if (amazonRes.data.Hits.length) {
                                searchResult.providers.push('AmazonPrimeVideo');
                            }

                            return res.json(searchResult);
                        })
                    })
                }) 
            })  
        }
    });
})


const requestMedia = (mediaType, title, keyIdx) => {
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

const requestProviders = (mediaId, providerName, keyIdx) => {
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

const startingAPIkey = () => (
    Math.floor(Math.random() * KEYS.length)
);

module.exports = router;