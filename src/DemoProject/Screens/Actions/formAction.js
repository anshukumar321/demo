import {axiosPost} from '../../HandlingApi/ApiHandler';

// import {axiosPost} from '../../../../DemoProject/HandlingApi/ApiHandler';

export const submitData =
  ({product_name, details, price}) =>
  dispatch => {
    return axiosPost('milkman_products', {
      product_name: product_name,
      price: price,
      // gst_percentage: values.gst_percentage,
      measure_unit: 'liter',
      // pic: values.pic,
      details: details,
      is_public: true,
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
