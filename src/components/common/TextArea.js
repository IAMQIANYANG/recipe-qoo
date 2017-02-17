import React from 'react';

const TextArea = ({name, rows,  value, onChange, placeholder, className}) => {
  return (
  <textarea
    className={className}
    name={name} 
    value={value}
    rows={rows}
    onChange={onChange}
    placeholder={placeholder}/>
  )
};

export default TextArea;