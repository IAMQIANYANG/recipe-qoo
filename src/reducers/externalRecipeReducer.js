import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function externalRecipeReducer(state = initialState.externalRecipes, action) {
  switch (action.type) {
    case types.LOAD_SEARCH_EXTERNAL_RECIPES_SUCCESS:
      return action.externalRecipes;
    default:
      return state;
  }
}

