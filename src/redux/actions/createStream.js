import { CREATE_STREAM } from './types';
import { reset } from 'redux-form';

const createStream = formValues => dispatch => {
  dispatch({
    type: CREATE_STREAM,
    payload: { ...formValues },
  });

  dispatch(reset('formExample'));
};

export default createStream;
