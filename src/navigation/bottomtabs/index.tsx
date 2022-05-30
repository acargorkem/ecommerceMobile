import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';
import FavoritesScreen from '../../screens/favorites';
import CartScreen from '../../screens/cart';
import ProfileScreen from '../../screens/profile';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Favorites" component={FavoritesScreen} />
      <BottomTabs.Screen name="Cart" component={CartScreen} />
      <BottomTabs.Screen name="Profile" component={ProfileScreen} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
