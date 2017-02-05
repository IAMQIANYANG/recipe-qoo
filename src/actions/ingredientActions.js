import * as types from './actionTypes';
import ingredientApi from '../api/mockRecipeApi';

export function loadRecipesSuccess(recipes) {
  return {type: types.LOAD_RECIPES_SUCCESS, recipes}
}

export function loadRecipes() {
  return function(dispatch) {
    return ingredientApi.getAllCourses().then(ingredients => {
      dispatch(loadRecipesSuccess(ingredients));
    }).catch(error => {
      throw(error)
    })
  }
}