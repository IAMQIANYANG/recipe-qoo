import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ingredientActions from '../actions/ingredientActions';

class RecipePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  ingredientRow(ingredient, index) {
    return <div key={index}>{ingredient.ingredientName} <span>{ingredient.ingredientAmount}</span></div>
  }

  render() {
    return (
      <div>
        <h1>List of Ingredients</h1>
        {this.props.ingredients.map(this.ingredientRow)}
        
      </div>
      )
  }
}

RecipePage.propTypes = {
  ingredients: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    ingredients: state.ingredients
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ingredientActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);