import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import cookie from 'react-cookie';
import * as types from './actions/actionTypes';
import { loadRecipes } from './actions/recipeActions';
import { getCurrentUser } from './actions/authActions'
import configureStore from './store/configureStore';
import routes from './routes';
import './index.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadRecipes());

// check if token is stored in cookie, if so update auth state;
const token = cookie.load('token');

if (token) {
  store.dispatch({type: types.AUTH_USER});
  store.dispatch(getCurrentUser(token));
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
