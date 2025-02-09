import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LaunchScreen from '../screens/LaunchScreen';
import MainTabView from '../navigation/MainTabView'; // ✅ FIXED PATH

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
            <Stack.Screen name="MainTabView" component={MainTabView} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
