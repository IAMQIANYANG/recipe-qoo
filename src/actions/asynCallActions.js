import * as types from './actionTypes';
import { Actions } from 'redux';

export function beginAsyncCall() {
  return {type: types.BEGIN_ASYNCCALL}
}