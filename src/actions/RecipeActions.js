import * as types from './actionTypes';
import { beginAsyncCall } from './asynCallActions';
import { updateCurrentRecipe } from './currentRecipeActions';
import cookie from 'react-cookie';


const requestToken = cookie.load('token');

export function loadRecipesSuccess(recipes) {
  return {type: types.LOAD_RECIPES_SUCCESS, recipes}
}

export function updateRecipeSuccess(recipe) {
  return {type: types.UPDATE_RECIPE_SUCCESS, recipe}
}

export function createRecipeSuccess(recipe) {
  return {type: types.CREATE_RECIPE_SUCCESS, recipe}
}

export function deleteRecipeSuccess(recipe) {
  return {type: types.DELETE_RECIPE_SUCCESS, recipe}
}

export function loadRecipes() {
  return function(dispatch) {
    dispatch(beginAsyncCall());
    return fetch(`${types.API_URL}/recipes`)
      .then(recipes => recipes.json())
      .then(recipes => dispatch(loadRecipesSuccess(recipes)))
      .catch(error => console.log(error));
  }
}

export function createRecipe(recipe) {
  return function(dispatch) {
    dispatch(beginAsyncCall());
    return fetch(`${types.API_URL}/recipes`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `JWT ${requestToken}`

        },
        method: "POST",
        body: JSON.stringify(recipe)
      }).then(result => result.json())
        .then(result => dispatch(createRecipeSuccess(result)))
        .then(result => dispatch(updateCurrentRecipe(result.recipe)))
        .catch(error => console.log(error));
  }
}

export function updateRecipe(recipe) {
  return function(dispatch) {
    return fetch(`${types.API_URL}/recipes`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `JWT ${requestToken}`

        },
        method: "PUT",
        body: JSON.stringify(recipe)
      }).then(dispatch(updateRecipeSuccess(recipe)))
      .catch(error => console.log(error));
  }
}


export function deleteRecipe(recipe) {
  return function(dispatch) {
    return fetch(`${types.API_URL}/recipes`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `JWT ${requestToken}`

        },
        method: "DELETE",
        body: JSON.stringify(recipe)
      }).then(dispatch(deleteRecipeSuccess(recipe)))
      .catch(error => console.log(error));
  }
}

export function searchExternalRecipes(query) {
  return function(dispatch) {
    return fetch(`https://community-food2fork.p.mashape.com/search?key=ccc216e945217f60c023df9a10b89fd8&q=${query}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Mashape-Key': '358RD5CHPYmshmPNKm6B8wLiJn4xp1yWWtajsnRhD9cb8yOCIx'
      }

      }).then(externalRecipes => externalRecipes.json())
        .then(externalRecipes => dispatch({type: types.LOAD_SEARCH_EXTERNAL_RECIPES_SUCCESS, externalRecipes}))
        .catch(error => console.log(error));
  }
}



