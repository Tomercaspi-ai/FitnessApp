import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LaunchScreen from './src/screens/LaunchScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
