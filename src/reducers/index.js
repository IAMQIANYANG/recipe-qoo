import { combineReducers } from 'redux';
import recipes from './RecipeReducer';

const rootReducer = combineReducers({
  recipes
});

export default rootReducer;