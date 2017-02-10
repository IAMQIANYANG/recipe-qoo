import * as types from './actionTypes';
import { Actions } from 'redux';
import { beginAsyncCall } from './asynCallActions';

export function createRecipeSuccess(userInfo) {
  return {type: types.REGISTER_SUCCESS, userInfo}
}


export function register(userInfo) {
  return function(dispatch) {
    dispatch(beginAsyncCall());
    return fetch("http://localhost:3001/register",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(userInfo)
      }).then(result => result.json())
      .then(result => dispatch(createRecipeSuccess(result)))
      .then(result => dispatch(updateCurrentRecipe(result.recipe)))
      .catch(error => console.log(error));
  }
}