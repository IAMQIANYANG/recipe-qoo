import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeList from '../components/recipe/RecipeList';


class RecipesPage extends React.Component {

  render() {
    const {recipes} = this.props;
    return (
      <div className="container">
        <RecipeList recipes={recipes} />
      </div>
    )
  }
}

RecipesPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);