const validate = ({ title, description }) => {
  const errors = {};

  if (!title) {
    errors.title = 'must have a title';
  }

  if (!description) {
    errors.description = 'must have a description';
  }

  return errors;
};

export default validate;
