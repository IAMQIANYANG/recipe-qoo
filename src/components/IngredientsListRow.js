import React, {PropTypes} from 'react';

const IngredientsListRow = ({ingredient}) => {
  return (
    <tr>
      <td>{ingredient.name}</td>
      <td>{ingredient.amount}</td>
    </tr>
  )
};

IngredientsListRow.propTypes = {
  ingredient: PropTypes.object.isRequired
};

export default IngredientsListRow