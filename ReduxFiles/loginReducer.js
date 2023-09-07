import {LOGINED} from './Constants';
const initialState = {};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINED:
      return true;
    default:
      return state;
  }
};
