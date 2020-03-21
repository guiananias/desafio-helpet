import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MoviesPage from '../pages/Movies';
import FavoritesPage from '../pages/Favorites';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={MoviesPage}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie" size={32} color="#ccc" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="heart" size={32} color="#ccc" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
