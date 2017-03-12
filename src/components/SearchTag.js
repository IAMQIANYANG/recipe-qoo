import React from 'react';

const SearchTag = ({className, value, onClick}) => {
  return (
    <input type="submit" className="searchTag" value={value} onClick={onClick} />
  )
};


export default SearchTag