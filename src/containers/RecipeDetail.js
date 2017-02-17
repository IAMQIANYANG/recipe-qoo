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
    this.props.actions.deleteRecipe(recipe)
      .then(this.context.router.push('/'));
  }

  render() {
    const { recipes } = this.props;
    const currentRecipeId = this.props.params.id;
    const currentRecipe = recipes.filter(recipe => {
      return recipe._id == currentRecipeId
    })[0];

    if (currentRecipe) {
    return (
      <div className="container">
        <h1>{currentRecipe.name}</h1>
        <div className="row">
          <img className="col-md-6" src={currentRecipe.image} alt="recipe"/>
          <div className="author-info  col-md-6">
            {currentRecipe.author.id === this.props.currentUserId && <Link to={`/recipes/${currentRecipeId}/edit`}><button className="btn">edit</button></Link>}
            {currentRecipe.author.id === this.props.currentUserId && <button className="btn" onClick={() => this.deleteAndRedirect(currentRecipe)}>delete</button>}
            <h4>Created by {currentRecipe.author.username}</h4>
          </div>
        </div>
        <div className="row">
        </div>
        <div className="row">
          <h3 className="section-ingredients-title">Ingredients</h3>
        </div>
        <div className="row" >
          {currentRecipe.ingredients.map( (ingredient, index) =>
            <IngredientRow key={index} ingredient={ingredient}/> )}
        </div>

        <div className="row">
          <h3 className="section-directions-title">Directions</h3>
        </div>
          <div className="row">
          {currentRecipe.directions.map((direction, index) =>
            <DirectionRow key={index} direction={direction}/> )}
          </div>

        <div className="row">
          <h3 className="section-tags-title">Tags</h3>
        </div>
          <div className="row">
        <div className="tag">{currentRecipe.tags.reduce((previous, current) => `${previous}  ${current}`)}</div>
          </div>

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
    recipes: state.recipes,
    currentUserId: state.auth.userid
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  }
  
};
  
export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);