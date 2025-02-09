"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("@react-navigation/stack");
const native_1 = require("@react-navigation/native");
const LaunchScreen_1 = __importDefault(require("../screens/LaunchScreen"));
const MainTabView_1 = __importDefault(require("../navigation/MainTabView")); // ✅ FIXED PATH
const Stack = (0, stack_1.createStackNavigator)();
const AppNavigator = () => (<native_1.NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LaunchScreen" component={LaunchScreen_1.default}/>
            <Stack.Screen name="MainTabView" component={MainTabView_1.default}/>
        </Stack.Navigator>
    </native_1.NavigationContainer>);
exports.default = AppNavigator;
