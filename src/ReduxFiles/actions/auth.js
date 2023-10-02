import {LOGIN, STOP_LOADER} from '../Constants';
import {LOGOUT} from '../Constants';
import {SETTOKEN} from '../Constants';
import {RESET_STORE} from '../Constants';
import {START_LOADER} from '../Constants';

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
export const setToken = item => ({
  type: SETTOKEN,
  data: item,
});
export const resetStore = () => ({
  type: RESET_STORE,
});
