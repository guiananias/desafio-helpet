import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import propTypes from 'prop-types';
import { Text } from 'react-native';

import MoviesPage from '../pages/Movies';
import FavoritesPage from '../pages/Favorites';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator tabBarOptions={{}}>
      <Tab.Screen
        name="Movies"
        component={MoviesPage}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? '#000' : color, fontSize: 12 }}>
              Movies
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="movie"
              size={32}
              color={focused ? '#000' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? '#eb052b' : color, fontSize: 12 }}>
              Favorites
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="heart"
              size={32}
              color={focused ? '#eb052b' : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

Tab.Screen.propTypes = {
  focused: propTypes.bool.isRequired,
  color: propTypes.string.isRequired,
};
