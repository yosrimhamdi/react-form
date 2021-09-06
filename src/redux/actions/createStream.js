import { CREATE_STREAM } from './types';

const createStream = formValues => dispatch => {
  dispatch({
    type: CREATE_STREAM,
    payload: { ...formValues },
  });
};

export default createStream;
