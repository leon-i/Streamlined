import axios from "axios";
import MOVIEDBKEY from '../config/movieDB_key'

export const fetchPopular = () =>
  //todo default to show
  axios
    .get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${MOVIEDBKEY}&sort_by=popularity.desc&with_original_language=en`
    )
    // .then((res) => rres.data.results);

export const fetchInfo = (title) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${MOVIEDBKEY}&query=${title}`
    )
    .then(
      (response) =>
        axios.get(
          `https://api.themoviedb.org/3/tv/${response.data.results[0].id}?api_key=${MOVIEDBKEY}&language=en-US`
        )
      // .then(res => res.data)
    );

export const searchByTitle = title => (
  axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=${MOVIEDBKEY}&query=${title}`
      )
      .then((response) =>
        axios.get(
          `https://api.themoviedb.org/3/tv/${response.data.results[0].id}?api_key=${MOVIEDBKEY}&language=en-US`
        )
      )
);