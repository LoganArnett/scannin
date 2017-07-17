import { SET_INFO } from '../actions/tag';

const tag = (state = {}, action) => {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};

export default tag;