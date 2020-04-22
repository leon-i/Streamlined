import axios from "axios";

export const fetchPopular = () => axios.get("/api/popular/");

export const fetchInfo = (title) =>
  axios.get("/api/popular/show", {
    params: title,
  });

// export const searchByTitle = (title) =>
//   axios
//     .get(
//       `https://api.themoviedb.org/3/search/tv?api_key=${MOVIEDBKEY}&query=${title}`
//     )
//     .then((response) =>
//       axios.get(
//         `https://api.themoviedb.org/3/tv/${response.data.results[0].id}?api_key=${MOVIEDBKEY}&language=en-US`
//       )
//     );
