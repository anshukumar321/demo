import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstTimeStartingPage from './DemoProject/screens/FirstTimeStartingPage';
import Mainstyles from './DemoProject/styles/MainStyle';
import RegisterPage from './DemoProject/screens/RegisterPage';
import LoginPage from './DemoProject/screens/LoginPage';
import HomePage from './DemoProject/screens/HomePage';

import Loader from './DemoProject/screens/components/Loader';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [initialRouteName, setInitialRouteName] = React.useState('');
  // const [loginStatus, setLoginStatus] = React.useState(false);

  return (
    <NavigationContainer>
      {/* {/* {!initialRouteName ? (
        <Loader visible={true} />
      ) : ( */}

      <Stack.Navigator
        // initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Welcome"
          component={FirstTimeStartingPage}
          options={Mainstyles.FirstTimeStartingPageHead}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign Up"
          component={RegisterPage}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign In"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
