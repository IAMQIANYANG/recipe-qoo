import React from 'react';
import TextArea from '../common/TextArea';
import TextInput from '../common/TextsInput'

const RecipeForm = ({recipe, onChange, onSave}) => {
  return (
    <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="recipeName">Recipe Name</label>
        <TextInput className="form-control" type="text" name="name" value={recipe.name} onChange={onChange} />
      </div>

      <div className="form-group">
        <label htmlFor="foodPicture">Food Picture</label>
        <TextInput className="form-control" type="text" name="image" value={recipe.image} onChange={onChange} />

      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <TextArea className="form-control" name="ingredients" value={recipe.ingredients} rows={6} onChange={onChange} placeholder="Put each ingredient on its own line. "/>
      </div>

      <div className="form-group">
        <label htmlFor="directions">Directions</label>
        <TextArea className="form-control" name="directions" value={recipe.directions} rows={7} onChange={onChange} placeholder="Put each step on its own line."/>
      </div>

      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <TextInput className="form-control" type="text" name="tags" value={recipe.tags} onChange={onChange} placeholder="Separate with comma"/>
      </div>

      <button type="submit" className="submit-button" onClick={onSave}>Submit</button>

    </form>
      </div>

  )
};

export default RecipeForm