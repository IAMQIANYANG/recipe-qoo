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
    this.redirect = this.redirect.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.recipe._id !== nextProps.recipe._id) {
      this.setState({recipe: Object.assign({}, nextProps.recipe)});
    }

  }

  redirect(id) {
    this.context.router.push(`/recipes/${id}`);
  }


  onRecipeFormSave(event){
    event.preventDefault();
    let ingredients = this.state.recipe.ingredients;
    ingredients = ingredients.split("\n");
    let directions = this.state.recipe.directions;
    directions = directions.split("\n");
    let tags = this.state.recipe.tags[0];
    tags = tags.split(",");
    const formattedRecipe = Object.assign({}, this.state.recipe, {ingredients}, {directions}, {tags});
    
    if (this.props.recipe._id) {
      this.props.actions.updateRecipe(formattedRecipe).then(this.redirect(this.props.recipe._id));
    } else {
      // this.props.actions.createRecipe(formattedRecipe).then((result) => { recipeID = result.recipe._id}).then(() => this.redirect(recipeID));
      this.props.actions.createRecipe(formattedRecipe).then(() => this.redirect(this.props.currentRecipe._id));

    }

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
  const currentRecipe = recipes.filter(recipe => recipe._id == id);
  if (currentRecipe) return currentRecipe[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.currentRecipe)
  const currentRecipeId = ownProps.params.id;

  let recipe = {name: "", image: "",  ingredients: [],  directions: [], tags: [] };

  if (currentRecipeId && state.recipes.length > 0) {
    recipe = getCurrentRecipeById(state.recipes, currentRecipeId);
    const formattedIngredients = recipe.ingredients.reduce((a, b) => a + '\n' + b);
    const formattedDirections = recipe.directions.reduce((a, b) => a + '\n' + b);
    recipe = Object.assign({}, recipe, {ingredients: formattedIngredients}, {directions: formattedDirections})

  }
  return {
    recipe: recipe,
    currentRecipe: state.currentRecipe
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipePage)

