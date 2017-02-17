import * as types from './actionTypes';
import cookie from 'react-cookie';
import { beginAsyncCall } from './asynCallActions';
import toastr from 'toastr'

toastr.options = {
  "positionClass": "toast-top-full-width"
};


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
          toastr.error(result.message)
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
            toastr.error(result.message)
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