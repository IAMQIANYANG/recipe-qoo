import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeForm from '../components/recipe/RecipeForm';


class ManageRecipePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      recipe: Object.assign({}, this.props.recipe)
    };

    this.onRecipeFormSave = this.onRecipeFormSave.bind(this);
    this.onRecipeFormChange = this.onRecipeFormChange.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.recipe.id !== nextProps.recipe.id) {
      this.setState({recipe: Object.assign({}, nextProps.recipe)});
    }
  }

  redirect() {
    this.context.router.push('/');
  }

  onRecipeFormSave(event){
    event.preventDefault();
    let ingredients = this.state.recipe.ingredients;
    ingredients = ingredients.split("\n");
    let directions = this.state.recipe.directions;
    directions = directions.split("\n");
    const formattedRecipe = Object.assign({}, this.state.recipe, {ingredients}, {directions});
    this.props.actions.saveRecipe(formattedRecipe, this.props.params.id);
    this.redirect();

  }


  onRecipeFormChange(event) {
    let recipe = this.state.recipe;
    const field = event.target.name;
    recipe[field] = event.target.value;
    return this.setState({recipe})
  }
  
  render() {
    const {recipe} = this.state;
    return (
      <div>
        <RecipeForm recipe={recipe} onChange={this.onRecipeFormChange} onSave={this.onRecipeFormSave}/>
      </div>
    )
  }
}

ManageRecipePage.contextTypes = {
  router: PropTypes.object.isRequired
};

const getCurrentRecipeById = (recipes, id) => {
  const currentRecipe = recipes.filter(recipe => +recipe.id === +id);
  if (currentRecipe) return currentRecipe[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const currentRecipeId = ownProps.params.id;

  let recipe = {name: "",  id: "",  image: "",  ingredients: [],  directions: [], tags: [] };

  if (currentRecipeId && state.recipes.length > 0) {
    recipe = getCurrentRecipeById(state.recipes, currentRecipeId);
    const formattedIngredients = recipe.ingredients.reduce((a, b) => a + '\n' + b);
    const formattedDirections = recipe.directions.reduce((a, b) => a + '\n' + b);
    recipe = Object.assign({}, recipe, {ingredients: formattedIngredients}, {directions: formattedDirections})

  }

  return {
    recipe: recipe
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipePage)

