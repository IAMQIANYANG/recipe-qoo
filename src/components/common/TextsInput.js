import React, {PropTypes} from 'react';

const TextInput = ({name, value, onChange, placeholder}) => {
  return (
    <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder}/>
  )
};

export default TextInput