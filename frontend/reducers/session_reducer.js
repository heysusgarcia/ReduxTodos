import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
