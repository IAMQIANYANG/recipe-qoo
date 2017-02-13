import * as types from './actionTypes';
import { Actions } from 'redux';
import cookie from 'react-cookie';
import { beginAsyncCall } from './asynCallActions';




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
      .then(result => console.log(result));
  }
}

export function login(userInfo) {
  return function(dispatch) {
    dispatch(beginAsyncCall());
    return fetch(`${types.API_URL}/users/login`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(userInfo)
      }).then(response => response.json())
        .then(result => {cookie.save('token', result.token, { path: '/' });
                        dispatch({ type: types.AUTH_USER });
                        console.log(result)
          // window.location.href = types.CLIENT_URL + '/';
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, types.AUTH_ERR)
      });
  }
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: types.UNAUTH_USER });
    cookie.remove('token', { path: '/' });

    window.location.href = types.CLIENT_URL + '/logout';
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
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}