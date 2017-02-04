import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import RecipePage from './components/RecipePage';
import RegisterPage from './components/RegisterPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecipePage} />
    <Route path="signup" component={RegisterPage} />
  </Route>
);
