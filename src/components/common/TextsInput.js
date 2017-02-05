import React, {PropTypes} from 'react';

const TextInput = ({name, label, value, onChange}) => {
  return (
    <input type="text" name={name} label={label} value={value} onChange={onChange}/>
  )
};

export default TextInput