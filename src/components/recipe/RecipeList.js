import React, {PropTypes} from 'react';
import RecipeThumbnail from '../../components/recipe/RecipeThumbnail';

const RecipeList = ({recipes}) => {
  return (
    <div>
      {recipes.map(recipe => {
        return <RecipeThumbnail key={recipe._id} recipe={recipe}/>
      })}
    </div>
  )
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;