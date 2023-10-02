import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import Button from './Components/Button';
import Input from './Components/Input';
import Loader from './Components/Loader';
import style3 from '../Styles/RegisterPageStyle';

const Register = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    fullname: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    } else if (inputs.phone.length > 10 && inputs.phone.length === 10) {
      handleError('please input a valid phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }
    if (!inputs.confirmPassword) {
      handleError('Please input confirm password', 'confirmPassword');
      isValid = false;
    } else if (inputs.confirmPassword !== inputs.password) {
      handleError('confirm Password mismatch', 'confirmPassword');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        navigation.navigate('Sign In');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 2000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={style3.safeAreaStyle}>
      <Loader visible={loading} />
      <ScrollView contentContainerStyle={style3.scrolViewStyle}>
        <Text style={style3.headerStyle}>Register</Text>
        <Text style={style3.headerDescriptionStyle}>
          Enter Your Details to Register
        </Text>
        <View style={style3.inputContainer}>
          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Input
            onChangeText={text => handleOnchange(text, 'confirmPassword')}
            onFocus={() => handleError(null, 'confirmPassword')}
            iconName="lock-outline"
            label="confirmPassword"
            placeholder="Confirm your password"
            error={errors.confirmPassword}
            password
          />
          <Button title="Register" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('Sign In')}
            style={style3.loginButtonTextStyle}>
            Already have account ?Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
