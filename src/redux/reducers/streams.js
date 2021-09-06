import { CREATE_STREAM } from '../actions/types';

const streams = (state = [], action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default streams;
