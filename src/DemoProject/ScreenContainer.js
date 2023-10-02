import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import FirstTimeStartingPage from './Screens/FirstTimeStartingPage';
import HomePage from './Screens/HomePage';
import {FormPage} from './Screens/FormPage';
import ViewProducts from './Screens/ViewProducts';
import LoginScreen from './Screens/LoginPage';
import Register from './Screens/RegisterPage';
import Mainstyles from './Styles/MainStyle';

const Stack = createNativeStackNavigator();
export default function ScreenContainer() {
  const [userToken, setUserToken] = React.useState(false);
  const isAuthenticated = useSelector(
    state => state.authReducer.isAuthenticated,
  );
  React.useEffect(() => { 
    setUserToken(isAuthenticated);
    console.log(userToken);
  }, [isAuthenticated]);
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userToken ? (
          <>
            <Stack.Screen
              name="Welcome"
              component={FirstTimeStartingPage}
              options={Mainstyles.FirstTimeStartingPageHead}
            />
            <Stack.Screen name="Sign Up" component={Register} />
            <Stack.Screen
              name="Sign In"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="FormPage"
              component={FormPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Welcome"
              component={FirstTimeStartingPage}
              options={Mainstyles.FirstTimeStartingPageHead}
            />
            <Stack.Screen name="Sign Up" component={Register} />
            <Stack.Screen
              name="Sign In"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Products"
              component={ViewProducts}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
