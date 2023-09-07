import React, {useContext} from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert} from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import Loader from './components/Loader';
import styles2 from '../styles/LoginPageStyle';

import {user_login} from '../user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({phone: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login1();
    }
  };
  const login1 = () => {
    setLoading(true);
    user_login({
      mobile_no: inputs.phone,
      password: inputs.password,
    })
      .then(result => {
        setLoading(false);
        if (result.status == 200) {
          navigation.navigate('Home');
        } else {
          Alert.alert('Wrong Id or Password');
        }
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={styles2.container}>
      <Loader visible={loading} />
      <View style={styles2.headerContainer}>
        <Text style={styles2.welcomeTextStyle}>
          Welcome to <Text style={{color: 'red'}}>e</Text>
          <Text style={styles2.welcomeText}>Shop</Text>
        </Text>
      </View>
      <View style={styles2.loginTitleStyle}>
        <Text style={styles2.loginTextStyle}>Log In</Text>
        <Text style={styles2.loginTitleDescreption}>
          Enter Your Details to Login
        </Text>
        <View style={{marginVertical: 20}}>
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
          <Button title="Log In" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('Sign Up')}
            style={styles2.registrationTextStyle}>
            Don't have account ?Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
