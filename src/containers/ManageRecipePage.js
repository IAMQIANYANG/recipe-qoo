import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeForm from '../components/recipe/RecipeForm';
import toastr from 'toastr'

toastr.options = {
  "positionClass": "toast-top-full-width"
};

class ManageRecipePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      localRecipe: Object.assign({}, this.props.recipe)
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
    if (!this.state.localRecipe.name || this.state.localRecipe.ingredients.length < 1 || !this.state.localRecipe.image || this.state.localRecipe.directions.length < 1) {
      toastr.error("All information is required except tags")
    } else {
      let ingredients = this.state.localRecipe.ingredients;
      ingredients = ingredients.split("\n");
      let directions = this.state.localRecipe.directions;
      directions = directions.split("\n");
      let tags = this.state.localRecipe.tags;
      tags = tags.split(",");
      const username = this.props.username;
      const userid = this.props.userid;

      const formattedRecipe = Object.assign({}, this.state.localRecipe, {ingredients}, {directions}, {tags}, {username}, {userid});


      if (this.props.recipe._id) {
        this.props.actions.updateRecipe(formattedRecipe).then(this.redirect(this.props.recipe._id));
      } else {
        this.props.actions.createRecipe(formattedRecipe).then(() => this.redirect(this.props.currentRecipe._id));

      }
    }

  }


  onRecipeFormChange(event) {
    let recipe = this.state.localRecipe;
    const field = event.target.name;
    recipe[field] = event.target.value;
    return this.setState({recipe})
  }

  render() {
    const {localRecipe} = this.state;
    return (
      <div>
        <RecipeForm recipe={localRecipe} onChange={this.onRecipeFormChange} onSave={this.onRecipeFormSave}/>
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
  const currentRecipeId = ownProps.params.id;

  let recipe = {name: "", image: "",  ingredients: [],  directions: [], tags: [] };

  if (currentRecipeId && state.recipes.length > 0) {
    recipe = getCurrentRecipeById(state.recipes, currentRecipeId);
    const formattedIngredients = recipe.ingredients.reduce((a, b) => a + '\n' + b);
    const formattedDirections = recipe.directions.reduce((a, b) => a + '\n' + b);
    const formattedTags = recipe.tags.reduce((a, b) => a + ',' + b);

    recipe = Object.assign({}, recipe, {ingredients: formattedIngredients}, {directions: formattedDirections}, {tags: formattedTags})

  }
  return {
    recipe: recipe,
    currentRecipe: state.currentRecipe,
    username: state.auth.username,
    userid: state.auth.userid
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipePage)
