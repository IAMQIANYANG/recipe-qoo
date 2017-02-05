import { combineReducers } from 'redux';
import ingredients from './ingredientReducer';

const rootReducer = combineReducers({
  ingredients
});

export default rootReducer;