import { CREATE_STREAM } from './types';

const createStream = (formValues) => {
  return {
    type: CREATE_STREAM,
    payload: { ...formValues },
  };
};

export default createStream;
