import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IngredientRow from '../components/recipe/IngredientRow';
import DirectionRow from "../components/recipe/DirectionRow";
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions';

class RecipeDetail extends Component {
  constructor(props, context) {
    super(props, context);

    this.deleteAndRedirect = this.deleteAndRedirect.bind(this);

  }

  redirect() {
    this.context.router.push('/');
  }

  deleteAndRedirect(recipe) {
    this.props.actions.deleteRecipe(recipe).
    then(this.context.router.push('/'));
  }

  render() {
    const { recipes } = this.props;
    const currentRecipeId = this.props.params.id;
    const currentRecipe = recipes.filter(recipe => {
      return recipe._id == currentRecipeId
    })[0];

    if (currentRecipe) {
    return (
      <div>
        <h2>{currentRecipe.name}</h2>
        <img src={currentRecipe.image} />
        <Link to={`recipes/${currentRecipeId}/edit`}><button>edit</button></Link>
        <button onClick={() => this.deleteAndRedirect(currentRecipe)}>delete</button>
        <h3>Ingredients</h3>
        <table>
          <tbody>
          {currentRecipe.ingredients.map( (ingredient, index) =>
            <IngredientRow key={index} ingredient={ingredient}/> )}
          </tbody>
        </table>
        <h3>Directions</h3>
        <table>
          <tbody>
          {currentRecipe.directions.map((direction, index) =>
            <DirectionRow key={index} direction={direction}/> )}
          </tbody>
        </table>
        <h3>Tags</h3>
        {currentRecipe.tags.map((tag, index) =>
          <p key={index}>{tag}</p>)}

      </div>
    )}
    else return <div>Loading</div>
  }
}

RecipeDetail.contextTypes = {
  router: PropTypes.object.isRequired
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
  
export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);