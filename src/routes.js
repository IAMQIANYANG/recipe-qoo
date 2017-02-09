import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import RecipePage from './containers/HomePage';
import ManageRecipePage from './containers/ManageRecipePage'
import RegisterPage from './components/RegisterPage';
import RecipeDetail from './containers/RecipeDetail';
import AddRecipePage from './containers/ManageRecipePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecipePage} />
    <Route path="signup" component={RegisterPage} />
    <Route path="recipes/new" component={AddRecipePage} />
    <Route path="recipes/:id" component={RecipeDetail} />
    <Route path="recipes/:id/edit" component={ManageRecipePage} />
  </Route>
);