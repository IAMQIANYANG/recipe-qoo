import * as types from './actionTypes';

export function updateCurrentRecipe(recipe) {
  return {type: types.UPDATE_CURRENTRECIPE, recipe}
}