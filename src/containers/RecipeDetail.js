import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientRow from '../components/recipe/IngredientRow';
import DirectionRow from "../components/recipe/DirectionRow";
import { Link } from 'react-router';


class RecipeDetail extends Component {
  render() {
    const { recipes } = this.props;
    const currentRecipeId = this.props.params.id;
    const currentRecipe = recipes.filter(recipe => {
      return recipe.id == currentRecipeId
    })[0];

    if (currentRecipe) {
    return (
      <div>
        <h2>{currentRecipe.name}</h2>
        <img src={currentRecipe.image} />
        <Link to={`recipes/${currentRecipe.id}/edit`}><button>edit</button></Link>
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


      </div>
    )}
    else return <div>Loading</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  }
};

export default connect(mapStateToProps)(RecipeDetail);