import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import streams from './streams';

export default combineReducers({
  form: formReducer,
  streams,
});
