import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT
});


export const signup = (currentUser) => dispatch => (
  SessionAPIUtil.signup(currentUser).then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const login = (currentUser) => dispatch => (
  SessionAPIUtil.login(currentUser).then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
);
