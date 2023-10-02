import {SETTOKEN} from '../Constants';
import {RESET_STORE} from '../Constants';
const initialState = {
  'access-token': null,
  client: null,
  uid: null,
  appversion: 10,
};
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETTOKEN: {
      return {...state, ...action.headers};
    }
    case RESET_STORE: {
      return initialState;
    }
    default:
      return state;
  }
};
export default headerReducer;
