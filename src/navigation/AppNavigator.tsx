// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import MainTabView from './MainTabView'; // Make sure this file exists and exports your tab navigator.
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
            <Stack.Screen name="MainTabView" component={MainTabView} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
