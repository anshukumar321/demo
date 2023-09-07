import {ApiManager} from './config';

export const user_login = async data => {
  try {
    const result = await ApiManager('/sign_in', {
      method: 'POST',
      headers: {
        appversion: 10,
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};
