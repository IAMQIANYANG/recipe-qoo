import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import RecipePage from './containers/HomePage';
import ManageRecipePage from './containers/ManageRecipePage'
import RegisterPage from './containers/RegisterPage';
import RecipeDetail from './containers/RecipeDetail';
import AddRecipePage from './containers/ManageRecipePage';
import LoginPage from './containers/LoginPage';
import RecipesPage from './containers/RecipesPage'
import AboutPage from './components/AboutPage'
import requireAuth from './containers/require-auth';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecipePage} />
    <Route path="/signup" component={RegisterPage} />
    <Route path="/recipes" component={RecipesPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/recipes/new" component={requireAuth(AddRecipePage)} />
    <Route path="/recipes/:id" component={RecipeDetail} />
    <Route path="/recipes/:id/edit" component={ManageRecipePage} />
    <Route path="/about" component={AboutPage} />
  </Route>
);
