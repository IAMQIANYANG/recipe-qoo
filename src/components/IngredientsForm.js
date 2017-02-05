import React, {PropTypes} from 'react';
import TextInput from './common/TextsInput';

const IngredientsForm = ({ingredient, onChange}) => {
  return (
    <form>
      <TextInput name="ingredientName" label="ingredientName" value={ingredient.name} onChange={onChange}/>
      <TextInput name="ingredientAmount" label="ingredientAmount" value={ingredient.amount} onChange={onChange}/>

      <TextInput name="ingredientName" label="ingredientName" value={ingredient.name} onChange={onChange}/>
      <TextInput name="ingredientAmount" label="ingredientAmount" value={ingredient.amount} onChange={onChange}/>

      <TextInput name="ingredientName" label="ingredientName" value={ingredient.name} onChange={onChange}/>
      <TextInput name="ingredientAmount" label="ingredientAmount" value={ingredient.amount} onChange={onChange}/>

      <TextInput name="ingredientName" label="ingredientName" value={ingredient.name} onChange={onChange}/>
      <TextInput name="ingredientAmount" label="ingredientAmount" value={ingredient.amount} onChange={onChange}/>

      <TextInput name="ingredientName" label="ingredientName" value={ingredient.name} onChange={onChange}/>
      <TextInput name="ingredientAmount" label="ingredientAmount" value={ingredient.amount} onChange={onChange}/>
    </form>
  )
};

export default IngredientsForm