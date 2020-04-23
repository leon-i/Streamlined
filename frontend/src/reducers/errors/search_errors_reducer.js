import { RECEIVE_SEARCH_ERRORS, CLEAR_SEARCH_ERRORS, RECEIVE_SEARCH_RESULT } from '../../actions/search_actions';
  
  const _nullErrors = [];
  
export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return [action.errors.message];
    case CLEAR_SEARCH_ERRORS:
        return _nullErrors;
    case RECEIVE_SEARCH_RESULT:
      return _nullErrors;
    default:
      return state;
  }
};