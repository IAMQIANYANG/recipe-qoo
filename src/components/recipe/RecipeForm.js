import React from 'react';
import TextArea from '../common/TextArea';
import TextInput from '../common/TextsInput'

const RecipeForm = ({recipe, onChange, onSave}) => {
  return (
    <form>


      <TextInput type="text" name="name" value={recipe.name} onChange={onChange} />

      <input type="file" name="image" accept="image/*" />

      <TextArea name="ingredients" value={recipe.ingredients} size={[4, 50]} onChange={onChange} placeholder="Put each ingredient on its own line. "/>

      <TextArea name="directions" value={recipe.directions} size={[4, 50]}  onChange={onChange} placeholder="Put each step on its own line."/>

      <TextInput type="text" name="tags" value={recipe.tags} onChange={onChange} placeholder="Separate with comma"/>

      <input type="submit" onClick={onSave} />

    </form>


  )
};

export default RecipeForm