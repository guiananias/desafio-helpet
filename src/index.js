import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppContext from './store/appContext';
import Routes from './app/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContext.Provider value={{ favorites: [] }}>
        <Routes />
      </AppContext.Provider>
    </SafeAreaProvider>
  );
}
