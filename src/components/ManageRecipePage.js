import React, {PropTypes} from 'react';
import IngredientsForm from './IngredientsForm';

class ManageRecipePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }

  render() {
    return (
      <IngredientsForm />
    )
  }
}