import * as types from './actionTypes';
import { Actions } from 'redux';

export function updateCurrentRecipe(recipe) {
  return {type: types.UPDATE_CURRENTRECIPE, recipe}
}