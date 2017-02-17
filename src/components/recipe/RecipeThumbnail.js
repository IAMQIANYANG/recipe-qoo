import React from 'react';
import { Link } from 'react-router';

const RecipeThumbnail = ({recipe, className}) => {
  return (
    <div className={className}>
      <div className="thumbnail">
      <Link to={`recipes/${recipe._id}`}>
        <img className="img-responsive" src={recipe.image} alt="recipe" />
        <div className="caption">
          <h3>{recipe.name}</h3>
        </div>
        </Link>
      </div>
    </div>
  )
};

export default RecipeThumbnail