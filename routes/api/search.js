const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys');
const KEYS = keys.apiKeys;
const movieDBKey = keys.movieDBKey;

router.get('/', (req, res) => {
    debugger
    const { mediaType, title } = req.query;
    const keyIdx = startingAPIkey();
    const searchResult = {
        media: '',
        imageUrl: '',
        providers: []
    }

    requestMedia(mediaType, title, keyIdx).then(response => {
        if (!response.data.ProgramMatches.length) {
            return res.status(404).json({ errors: 'Content not found' });
        } else {
            const matches = response.data.ProgramMatches;
            let media;
            if (matches.length > 1) {
                matches.forEach(match => {
                    if (!media || ((match.Year > media.Year) && match.OriginalLanguage === 'English')) {
                        media = match;
                    }
                })
            } else {
                media = response.data.ProgramMatches[0];
            }
            
            debugger
            searchResult.media = media;

            if (mediaType === 'Movie') {
                requestMoviePoster(title).then(posterRes => {
                    const imgPath = posterRes.data.results[0].backdrop_path;
                    searchResult.imageUrl = `https://image.tmdb.org/t/p/w500${imgPath}`;
                });
            } else if (mediaType === 'Show') {
                requestTVPoster(title).then(posterRes => {
                    const imgPath = posterRes.data.results[0].backdrop_path;
                    searchResult.imageUrl = `https://image.tmdb.org/t/p/w500${imgPath}`;
                });
            }

            

            requestProviders(media.Id, 'Netflix', (keyIdx + 1) % KEYS.length).then(netflixRes => {
                debugger
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
    }).catch(e => console.log(e));
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
    }).catch(e => {
        console.log(e);
    });
}

const requestTVPoster = (title) => {
    return axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${movieDBKey}&query=${title}`
    ).catch(e => console.log(e));
}

const requestMoviePoster = (title) => {
    return axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${movieDBKey}&query=${title}`
    ).catch(e => console.log(e));
}

const startingAPIkey = () => (
    Math.floor(Math.random() * KEYS.length)
);

module.exports = router;