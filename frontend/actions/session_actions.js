import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logout = currentUser => ({
  type: LOGOUT
});


export const fetchCurrentUser = () => dispatch => (
  SessionAPIUtil.fetchCurrentUser().then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const logoutUser = (currentUser) => dispatch => (
  SessionAPIUtil.logoutUser(currentUser).then(currentUser => dispatch(logout(currentUser)))
);
