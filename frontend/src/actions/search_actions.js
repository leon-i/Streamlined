import * as SearchAPIUtil from '.././util/search_api_util';

export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';
export const CLEAR_SEARCH_RESULT = 'CLEAR_SEARCH_RESULT';

const receiveSearchResult = result => ({
    type: RECEIVE_SEARCH_RESULT,
    result
});

export const clearSearchResult = () => ({
    type: CLEAR_SEARCH_RESULT
});

export const requestSearchResult = query => dispatch =>
    SearchAPIUtil.search(query).then(result => dispatch(receiveSearchResult(result)));

// export const requestSearchResult = query => dispatch => {
//     debugger
//     return SearchAPIUtil.search(query).then(result =>  {
//         debugger
//         return dispatch(receiveSearchResult(result))
//     });
// }
    