import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './Form.sass';

const Form = props => {
  console.log(props);

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Title</label>
        <input type="text" className="form-control" placeholder="Enter Title" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Description"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default reduxForm({ form: 'formExample' })(Form);
