import React, {PropTypes} from 'react';
import IngredientListRow from './IngredientsListRow';

const IngredientList = ({ingredients}) => {
  return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
    {ingredients.map((ingredient, index) => 
    <IngredientListRow key={index} ingredient={ingredient}/>)}
    </tbody>
    
  </table>
  )
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default IngredientList;