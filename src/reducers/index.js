import { combineReducers } from 'redux';
import recipes from './RecipeReducer';
import numberOfAsyncCallsInProgress from './asyncCallReducer';
import currentRecipe from './currentRecipeReducer';
import auth from './authReducer';
import externalRecipeReducer from './externalRecipeReducer';

const rootReducer = combineReducers({
  recipes,
  numberOfAsyncCallsInProgress,
  currentRecipe,
  auth,
  externalRecipeReducer
});

export default rootReducer;