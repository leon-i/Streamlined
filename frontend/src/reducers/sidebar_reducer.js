import { OPEN_DEVELOPER_LINKS, CLOSE_DEVELOPER_LINKS } from "../actions/sidebar_actions";

const sidebarReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_DEVELOPER_LINKS:
        return true;
    case CLOSE_DEVELOPER_LINKS:
      return null;
    default:
      return state;
  }
};

export default sidebarReducer;