import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from './Input';
import './Form.sass';
import validate from './validate';

const Form = ({ handleSubmit }) => {
  const onFormSubmit = formValues => {
    console.log(formValues);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="title" component={Input} />
      <Field name="description" component={Input} />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default reduxForm({ form: 'formExample', validate })(Form);
