import {axiosPost} from '../../HandlingApi/ApiHandler';

export const loginAuthentication =
  ({mobile_no, password}) =>
  dispatch => {
    return axiosPost('auth/sign_in', {
      mobile_no: mobile_no,
      password: password,
    })
      .then(responce => {
        if (responce.status === 200) {
          return {success: true, message: responce.data.message};
        } else {
          return {success: false, error: responce.data.message};
        }
      })
      .catch(err => {
        return {success: false, error: err};
      });
  };
