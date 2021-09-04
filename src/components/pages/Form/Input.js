import React from 'react';

const Input = props => {
  console.log(props);

  return (
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Description</label>
      <input
        {...props.input}
        type="text"
        className="form-control"
        placeholder="Enter Description"
      />
    </div>
  );
};

export default Input;
