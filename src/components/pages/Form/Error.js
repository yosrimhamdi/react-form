import React from 'react';

const Error = ({ meta }) => {
  const { error, submitFailed } = meta;
  console.log(meta);

  if (error && submitFailed) {
    return <div>{error}</div>;
  }

  return null;
};

export default Error;