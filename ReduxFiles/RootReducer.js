import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';

export const RootReducer = combineReducers({
  loginReducer,
});
