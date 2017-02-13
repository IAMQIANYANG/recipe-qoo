import { combineReducers } from 'redux';
import recipes from './RecipeReducer';
import numberOfAsyncCallsInProgress from './asyncCallReducer';
import currentRecipe from './currentRecipeReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  recipes,
  numberOfAsyncCallsInProgress,
  currentRecipe,
  auth
});

export default rootReducer;