import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchPage from '../pages/Search';
import FavoritesPage from '../pages/Favorites';
import TabNavigationPages from './_TabNavigation';

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Search" component={SearchPage} />
        <RootStack.Screen name="Main" component={TabNavigationPages} />
        <RootStack.Screen name="Favorites" component={FavoritesPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
