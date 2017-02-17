import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case types.AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case types.UNAUTH_USER:
      return { ...state, authenticated: false };
    case types.AUTH_ERR:
      return { ...state, error: action.payload };
    case types.GET_USER:
      return {...state, username: action.payload.user.username, userid: action.payload.user.userid};
    default:
      return state
  }

}