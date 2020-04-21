import * as ShowApiUtil from "../util/show_api_util";

export const RECEIVE_SHOWS = "RECEIVE_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";

const receiveShows = (shows) => ({
  type: RECEIVE_SHOWS,
  shows,
});

const receiveShow = (show) => ({
  type: RECEIVE_SHOW,
  show,
});

export const requestPopular = () => (dispatch) =>
  ShowApiUtil.fetchPopular().then((shows) => dispatch(receiveShows(shows)));

export const requestShow = (title) => (dispatch) =>
  ShowApiUtil.fetchInfo(title).then((show) => dispatch(receiveShow(show)));
