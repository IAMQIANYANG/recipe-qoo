import React, {PropTypes} from 'react';
import RecipeThumbnail from '../../components/recipe/RecipeThumbnail';

const RecipeList = ({recipes}) => {
  if(recipes) {
    return (
      <div className="row">
        {recipes.map(recipe => {
          return <RecipeThumbnail className="col-md-3" key={recipe._id} recipe={recipe}/>
        })}
      </div>

    )
  }
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;