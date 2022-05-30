import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Signin from '../../screens/signin';
import BottomTabsNavigator from '../bottomtabs';

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
            <Stack.Screen name="Signin" component={Signin} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
