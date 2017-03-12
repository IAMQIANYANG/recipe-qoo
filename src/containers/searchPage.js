import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeList from '../components/recipe/RecipeList';
import SearchTag from '../components/SearchTag';
import { Link } from 'react-router';



class SearchPage extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResults: [],
      searched: false
    };
    
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.findByIngredient = this.findByIngredient.bind(this);
    this.onTagClick = this.onTagClick.bind(this);
    this.onRandom = this.onRandom.bind(this);
  }
  
  findByIngredient(ingredient) {
    if(ingredient !== '') {
      ingredient = ingredient.toLowerCase();
      const recipes = this.props.recipes;
      let searchResults = [];
      recipes.forEach(function (recipe) {
        recipe.ingredients.forEach(function (ing) {
          if (ing.indexOf(ingredient) >= 0) {
            searchResults.push(recipe)
          }
        });
      });
      this.setState({searchResults})
    }
  }
  
  onSearchSubmit() {
    this.setState({searched: true});
    this.findByIngredient(this.state.searchQuery)
  }

  onChange(evt) {
    this.setState({searchQuery: evt.target.value})
  }

  onTagClick(evt) {
    this.setState({searchQuery: evt.target.value});
    this.onSearchSubmit();
  }

  onRandom(){
    const recipes = this.props.recipes;
    const randomId = recipes[Math.floor(recipes.length * Math.random())]._id;
    this.context.router.push(`/recipes/${randomId}`)
  }
  
  render() {
    const searchTags = ["chicken", "toufu", "beef", "fish", "pork" ];
    return (
      <div>
        <div className="col-md-6 col-md-offset-4">
          <input className="searchBox" type="text" name="searchQuery" value={this.state.searchQuery} onChange={this.onChange}/>
          <button className="pick-button" type="submit" onClick={this.onSearchSubmit}>Search</button>
          <button className="pick-button" onClick={this.onRandom}>Random</button>
        </div>

        <div className="col-md-8 col-md-offset-2">
          <h4>Popular search terms:</h4>
          {searchTags.map((tag, index) => {
            return <SearchTag onClick={this.onTagClick} value={tag} key={index}/>
          })}
        </div>

        <div className="col-md-8 col-md-offset-2">
          {this.state.searchResults.length === 0 && this.state.searched &&
          <h4>Sorry, no recipe containing this ingredient has been added yet...:( <br/> <Link to="/signup" className="signup">Sign up</Link> and create your own recipe!</h4>
          }

          {this.state.searchResults.length > 0 && <div className="container">
            <RecipeList recipes={this.state.searchResults} />
          </div>}
        </div>
      </div>
    )
  }
  
  
}

SearchPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);