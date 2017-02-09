import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeList from '../components/recipe/RecipeList';
// import configureStore from '../store/configureStore';
// import { loadRecipes } from '../actions/recipeActions';
//
//
// const store = configureStore();
// store.dispatch(loadRecipes());

class RecipePage extends React.Component {

  render() {
    const {recipes} = this.props;
    return (
      <RecipeList recipes={recipes} />
       )
  }
}

RecipePage.propTypes = {
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);