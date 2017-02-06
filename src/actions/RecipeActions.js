import * as types from './actionTypes';
import ingredientApi from '../api/mockRecipeApi';

export function loadRecipesSuccess(recipes) {
  return {type: types.LOAD_RECIPES_SUCCESS, recipes}
}

export function loadRecipes() {
  return function(dispatch) {
    return ingredientApi.getAllCourses().then(recipes => {
      dispatch(loadRecipesSuccess(recipes));
    }).catch(error => {
      throw(error)
    })
  }
}

export function updateRecipeSuccess(recipe) {
  return {type: types.UPDATE_RECIPE_SUCCESS, recipe}
}

export function createRecipeSuccess(recipe) {
  return {type: types.CREATE_RECIPE_SUCCESS, recipe}
}


export function saveRecipe(recipe, recipeId) {
  return function(dispatch) {
    return ingredientApi.saveCourse(recipe).then(recipe => {
      recipeId? dispatch(updateRecipeSuccess(recipe)) :
        dispatch(createRecipeSuccess(recipe));
    }).catch(error => {
      throw(error)
    })
  }
}