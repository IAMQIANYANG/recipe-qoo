import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RecipeThumbnail = ({recipe}) => {
  return (
    <div>
      <Link to={`recipes/${recipe.id}`}>
        <img src={recipe.image} />
        <h3>{recipe.name}</h3>
      </Link>
    </div>
  )
};

export default RecipeThumbnail