import axios from 'axios';
import {store} from '../../ReduxFiles/Store';
import {setToken} from '../../ReduxFiles/actions/auth';
import {SETTOKEN} from '../../ReduxFiles/Constants';
export const getHeaders = () => {
  const headers = store.getState().headerReducer;
  return {
    'access-token': headers?.['access-token'],
    client: headers?.client,
    uid: headers?.uid,
    appversion: headers.appversion,
  };
};
export const createAxios = () =>
  axios.create({
    baseURL: 'https://api-staging.simpledairy.com/api/v1/',
    headers: getHeaders(),
  });

export const axiosPost = (endApi, params) =>
  new Promise((resolve, reject) => {
    createAxios()
      .post(endApi, params)
      .then(response => {
        store.dispatch({type: SETTOKEN, headers: response.headers});
        // store.dispatch(setToken(response.headers));

        return resolve(response);
      })
      .catch(err => reject(err));
  });

export const axiosGet = (endApi, params) =>
  new Promise((resolve, reject) => {
    createAxios()
      .get(endApi, params)
      .then(response => {
        store.dispatch({type: SETTOKEN, headers: response.headers});
        return resolve(response);
      })
      .catch(err => reject(err));
  });
