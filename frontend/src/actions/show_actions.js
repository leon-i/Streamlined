import * as ShowApiUtil from "../util/show_api_util";

export const RECEIVE_POPULAR_SHOWS = "RECEIVE_SHOWS";
export const RECEIVE_USER_SHOWS = "RECEIVE_USER_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";
// export const RECEIVE_LIKED_SHOWS = "RECEIVE_LIKED_SHOWS";

const receivePopularShows = (shows) => ({
  type: RECEIVE_POPULAR_SHOWS,
  shows,
});

const receiveShow = (show) => ({
  type: RECEIVE_SHOW,
  show,
});

// const receiveLikedShows = (shows) => ({
//   type: RECEIVE_LIKED_SHOWS,
//   shows, //array
// });

// export const searchShow = (title) => (dispatch) =>
//   ShowApiUtil.searchByTitle(title).then((show) => dispatch(receiveShow(show)));

export const requestPopular = () => (dispatch) =>
  ShowApiUtil.fetchPopular().then((shows) =>
    dispatch(receivePopularShows(shows))
  );

export const requestShow = (title) => (dispatch) =>
  ShowApiUtil.fetchInfo(title).then((show) => dispatch(receiveShow(show)));

// export const requestLikedShows = (userId) => (dispatch) =>
//   ShowApiUtil.fetchLikedShows(userId).then((likedShows) =>
//     dispatch(receiveLikedShows(likedShows))
//   );
