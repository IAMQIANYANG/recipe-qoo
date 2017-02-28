import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeList from '../components/recipe/RecipeList';
import RecipeThumbnail from '../components/recipe/RecipeThumbnail';
import Loader from 'react-loader';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenRecipe: null
    };
    this.chooseARecipe = this.chooseARecipe.bind(this)
  }

  chooseARecipe() {
    const recipes = this.props.recipes;
    const result = recipes[Math.floor(recipes.length * Math.random())];
    this.setState({chosenRecipe: result});
  }

  renderRecipe(recipes) {
    if (recipes.length > 0) {
      return (<div>
          <div className="row">
            <div className="col-md-5"></div>
            <button className="col-md-2 pick-button" onClick={this.chooseARecipe}>Pick A Recipe</button>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              { this.state.chosenRecipe ?
                <RecipeThumbnail className="col-md-12 picked-recipe" recipe={this.state.chosenRecipe}/> :
                <RecipeThumbnail className="col-md-12 picked-recipe" recipe={recipes[recipes.length - 1]}/>}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Loader loaded={false}/>
      );
    }
  }

  render() {
    const {recipes} = this.props;
    
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="row">
              <h4 className="intro"> Don't feel like thinking about what to cook for today? </h4>
              <h4 className="intro"> Just click the button below and Qoo will choose a recipe for you!</h4>
            </div>
          </div>
          {this.renderRecipe(recipes)}
        </div>
      );
    
  }
}

HomePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);