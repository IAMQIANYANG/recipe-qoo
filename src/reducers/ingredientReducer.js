import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function ingredientReducer(state = initialState.ingredients, action) {
  switch (action.type) {
    case types.LOAD_RECIPES_SUCCESS:
      return action.recipes;

    default:
      return state;
  }
}