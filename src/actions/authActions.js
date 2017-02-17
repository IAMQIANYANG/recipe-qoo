import * as types from './actionTypes';
import cookie from 'react-cookie';
import { beginAsyncCall } from './asynCallActions';


const requestToken = cookie.load('token');


export function register(userInfo) {
  return function(dispatch) {
    dispatch(beginAsyncCall());
    return fetch(`${types.API_URL}/register`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(userInfo)
      }).then(result => result.json())
      .then(result => {
        if (result.error){
          console.log(result.message)
        } else {
          cookie.save('token', result.token, { path: '/' });
          dispatch({ type: types.AUTH_USER });
          window.location.href = types.CLIENT_URL + '/';
        }});
  }
}

export function login(userInfo) {
  return function(dispatch) {
    dispatch(beginAsyncCall());
    return fetch(`${types.API_URL}/users/login`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(userInfo)
      }).then(response => response.json())
        .then(result => {
          if (result.error){
          console.log(result.error.message)
        } else {
          cookie.save('token', result.token, { path: '/' });
          dispatch({ type: types.AUTH_USER});
          window.location.href = types.CLIENT_URL + '/';
      }});
  }
}

export function logout() {
  return function (dispatch) {
    dispatch({ type: types.UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    window.location.href = types.CLIENT_URL;
  }
}

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if(error.error) {
    errorMessage = error.message;
  }

  if(error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logout();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

export function getCurrentUser(token) {
  return function(dispatch) {
    dispatch(beginAsyncCall());
    return fetch(`${types.API_URL}/users/me?token=${requestToken}`)
      .then(response => response.json())
        .then(result => {
          dispatch({type: types.GET_USER, payload: result })
        })

  }
}