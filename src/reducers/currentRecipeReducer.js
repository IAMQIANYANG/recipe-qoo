import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentRecipeReducer(state=initialState.currentRecipe, action) {
  switch (action.type) {
    case types.UPDATE_CURRENTRECIPE:
      return action.recipe;

    default:
      return state;
  }
}