import axios from "axios";

export const fetchPopular = () =>
  //todo default to show
  axios
    .get(
      `https://api.themoviedb.org/3/discover/tv?api_key=14e144325a4d4e94c4d3af666779eb96&sort_by=popularity.desc&with_original_language=en`
    )
    // .then((res) => rres.data.results);

export const fetchInfo = (title) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=14e144325a4d4e94c4d3af666779eb96&query=${title}`
    )
    .then(
      (response) =>
        axios.get(
          `https://api.themoviedb.org/3/tv/${response.data.results[0].id}?api_key=14e144325a4d4e94c4d3af666779eb96&language=en-US`
        )
      // .then(res => res.data)
    );

export const searchByTitle = title => (
  axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=14e144325a4d4e94c4d3af666779eb96&query=${title}`
      )
      .then((response) =>
        axios.get(
          `https://api.themoviedb.org/3/tv/${response.data.results[0].id}?api_key=14e144325a4d4e94c4d3af666779eb96&language=en-US`
        )
      )
);