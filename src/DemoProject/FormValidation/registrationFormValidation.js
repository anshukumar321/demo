// import {Keyboard} from 'react-native';
// export const registrationFormValidate = ({handleError, inputs, register}) => {
//   Keyboard.dismiss();
//   let isValid = true;

//   if (!inputs.fullname) {
//     handleError('Please input fullname', 'fullname');
//     isValid = false;
//   }

//   if (!inputs.phone) {
//     handleError('Please input phone number', 'phone');
//     isValid = false;
//   } else if (inputs.phone.length > 10 && inputs.phone.length === 10) {
//     handleError('please input a valid phone number', 'phone');
//     isValid = false;
//   }

//   if (!inputs.password) {
//     handleError('Please input password', 'password');
//     isValid = false;
//   } else if (inputs.password.length < 5) {
//     handleError('Min password length of 5', 'password');
//     isValid = false;
//   }
//   if (!inputs.confirmPassword) {
//     handleError('Please input confirm password', 'confirmPassword');
//     isValid = false;
//   } else if (inputs.confirmPassword !== inputs.password) {
//     handleError('confirm Password mismatch', 'confirmPassword');
//     isValid = false;
//   }

//   if (isValid) {
//     register();
//   }
// };
