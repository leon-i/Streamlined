const express = require("express");
const router = express.Router();
const axios = require("axios");
const keys = require("../../config/keys");
const movieDBKey = keys.movieDBKey;

router.get("/", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${movieDBKey}&sort_by=popularity.desc&with_original_language=en`
    )
    .then((popularRes) => {
      return res.json(popularRes.data.results);
    });
});

router.get("/show", (req, res) => {
  const title = req.query[0];
  axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${movieDBKey}&query=${title}`
    )
    .then((response) =>
      axios.get(
        `https://api.themoviedb.org/3/tv/${response.data.results[0].id}?api_key=${movieDBKey}&language=en-US`
      )
    )
    .then((showRes) => {
      return res.json(showRes.data);
    });
});

module.exports = router;
