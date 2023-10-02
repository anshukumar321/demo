import {combineReducers} from 'redux';
import authReducer from './reducers/auth';
import headerReducer from './reducers/header';

export const rootReducer = combineReducers({
  authReducer,
  headerReducer,
});
