import React from 'react';

const TextInput = ({name, value, onChange, placeholder, className}) => {
  return (
    <input className={className} type="text" name={name} value={value} onChange={onChange} placeholder={placeholder}/>
  )
};

export default TextInput