import React, {PropTypes} from 'react';

const TextInput = ({name, value, onChange}) => {
  return (
    <input type="text" name={name} value={value} onChange={onChange}/>
  )
};

export default TextInput