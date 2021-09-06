import React from 'react';
import Error from './Error';

const Input = props => {
  const { input, meta } = props;

  return (
    <div className="form-group">
      <label>{input.name}</label>
      <input
        {...input}
        type="text"
        className="form-control"
        placeholder={'Enter ' + input.name}
      />
      <Error meta={meta} />
    </div>
  );
};

export default Input;
