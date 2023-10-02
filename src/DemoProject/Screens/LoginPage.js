import React from 'react';
import {View, Text, ScrollView, Keyboard, Alert} from 'react-native';
import Input from './Components/Input';
import Loader from './Components/Loader';
import styles2 from '../Styles/LoginPageStyle';
import {useAppDispatch} from '../../ReduxFiles/Store';
import {login, setToken} from '../../ReduxFiles/actions/auth';
import {axiosPost} from '../HandlingApi/ApiHandler';
import Button from './Components/Button';
import { loginAuthentication } from './Actions/loginAction';


const LoginScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({phone: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch(); // Use the custom useDispatch hook
 const toNavigation=()=>{
  dispatch(login());
  navigation.navigate('Home');
 }
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
    dispatch(
      loginAuthentication({
        mobile_no: inputs.phone,
        password: inputs.password,
      }))
      .then(responce => {
        setLoading(true);
        if (responce.success) {
           setInputs({phone: '', password: ''});
          setTimeout(toNavigation, 3000);
         
          setLoading(false);
         
        } else {
          console.log(responce.error);
        }
      })
      .catch(err => {
        Alert.alert(err);
      });
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <ScrollView style={styles2.container}>
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
    </ScrollView>
  );
};

export default LoginScreen;
