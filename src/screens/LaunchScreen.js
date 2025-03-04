"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const native_1 = require("@react-navigation/native");
const LaunchScreen = () => {
    const fadeAnim = (0, react_native_reanimated_1.useSharedValue)(0);
    const navigation = (0, native_1.useNavigation)(); // ✅ Ensure correct typing
    (0, react_1.useEffect)(() => {
        fadeAnim.value = (0, react_native_reanimated_1.withTiming)(1, { duration: 1000 });
        setTimeout(() => {
            navigation.navigate('MainTabView'); // ✅ Fixes the error
        }, 1500);
    }, []);
    return (<react_native_reanimated_1.default.View style={[styles.container, { opacity: fadeAnim }]}>
            <react_native_1.View style={styles.content}>
                <react_native_1.Image source={require('../../assets/bolt.png')} style={styles.logo}/>
                <react_native_1.Text style={styles.title}>Caloride</react_native_1.Text>
            </react_native_1.View>
        </react_native_reanimated_1.default.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
    content: { alignItems: 'center' },
    logo: { width: 150, height: 150, tintColor: 'white' },
    title: { fontSize: 32, fontWeight: 'bold', color: 'white', marginTop: 20 },
});
exports.default = LaunchScreen;
