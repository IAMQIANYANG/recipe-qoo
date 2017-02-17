import * as types from '../actions/actionTypes';
import initialState from './initialState';

const actionEndsInSuccess = (actionType) => {
  return actionType.substring(actionType.length - 8) === '_SUCCESS';
};

export default function asyncCallReducer(state = initialState.numberOfAsyncCallsInProgress, action) {
  if (action.type === types.BEGIN_ASYNCCALL) {
    return state + 1
  } else if (actionEndsInSuccess(action.type)) {
    return state - 1
    
  }
  
  return state;
}