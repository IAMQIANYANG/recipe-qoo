import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case types.AUTH_USER:
      return { ...state, userInfo: action.userInfo, error: '', message: '', authenticated: true };
    case types.UNAUTH_USER:
      return { ...state, authenticated: false };
    case types.AUTH_ERR:
      return { ...state, error: action.payload };
  }

  return state;
}