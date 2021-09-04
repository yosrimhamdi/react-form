import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: () => ({ user: null, isSignedIn: false }),
  abc: formReducer,
});
