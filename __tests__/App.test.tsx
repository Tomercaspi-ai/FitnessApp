import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import LaunchScreen from '../src/screens/LaunchScreen';
import MainTabView from '../src/navigation/MainTabView';



// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  Launch: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Launch">
          <Stack.Screen name="Launch" component={LaunchScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Main" component={MainTabView} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
