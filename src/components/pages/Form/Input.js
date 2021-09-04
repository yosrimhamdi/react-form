import React from 'react';

const Input = props => {
  const { input } = props;

  return (
    <div className="form-group">
      <label>{input.name}</label>
      <input
        {...input}
        type="text"
        className="form-control"
        placeholder={'Enter ' + input.name}
      />
    </div>
  );
};

export default Input;
