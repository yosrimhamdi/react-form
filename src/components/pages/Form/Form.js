import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Input from './Input';
import './Form.sass';
import validate from './validate';
import createStream from '../../../redux/actions/createStream';

const Form = ({ handleSubmit, createStream }) => {
  const onFormSubmit = (formValues) => {
    createStream(formValues);
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

const wrappedForm = reduxForm({ form: 'formExample', validate })(Form);

export default connect(null, { createStream })(wrappedForm);
