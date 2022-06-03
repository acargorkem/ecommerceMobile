import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SigninScreen from '../../screens/auth/signin';
import BottomTabsNavigator from '../bottomtabs';
import SignupScreen from '../../screens/auth/signup';
import ForgotPasswordScreen from '../../screens/auth/forgotPassword';

const Stack = createStackNavigator();

const Route = () => {
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Main" component={BottomTabsNavigator} />
          </>
        ) : (
          <>
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
