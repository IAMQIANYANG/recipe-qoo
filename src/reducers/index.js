import { combineReducers } from 'redux';
import recipes from './RecipeReducer';
import numberOfAsyncCallsInProgress from './asyncCallReducer';
import currentRecipe from './currentRecipeReducer';

const rootReducer = combineReducers({
  recipes,
  numberOfAsyncCallsInProgress,
  currentRecipe
});

export default rootReducer;