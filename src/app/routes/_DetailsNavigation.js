import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './_TabNavigation';
import DetailsPage from '../pages/Details';

const Stack = createStackNavigator();

export default function DetailsModal() {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="Main" component={TabNavigation} />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
}
