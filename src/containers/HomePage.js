import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeThumbnail from '../components/recipe/RecipeThumbnail';
import Loader from 'react-loader';
import SearchPage from './SearchPage';


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
            <SearchPage />
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
          <div className="row intro">
              <h4> Don't feel like thinking about what to cook for today? </h4>
              <h4> Search with any ingredient you have in your fridge!</h4>
              <h4> Or just click the random button and Qoo will choose a recipe for you!</h4>
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