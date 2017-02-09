import React from 'react';

const TextArea = ({name, value, size, onChange, placeholder}) => {
  return (
  <textarea 
    name={name} 
    value={value}
    rows={size[0]}
    cols={size[1]}
    onChange={onChange}
    placeholder={placeholder}/>
  )
};

export default TextArea;