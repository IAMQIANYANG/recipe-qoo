import React from 'react';

const RecipeForm = ({recipe, ingredients, directions, onChange, onSave}) => {
  return (
    <form>

      <input type="text" name="name" value={recipe.name} onChange={onChange} />

      <textarea name="ingredients" value={recipe.ingredients} rows="4" cols="50" onChange={onChange} />

      <textarea name="directions" value={recipe.directions} rows="4" cols="50"  onChange={onChange} />

      <input type="submit" onClick={onSave} />

    </form>


  )
};

export default RecipeForm