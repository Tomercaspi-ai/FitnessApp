"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const MealBubble = ({ meal }) => {
    return (<react_native_1.View style={styles.container}>
            <react_native_1.Text style={styles.mealName}>{meal.name}</react_native_1.Text>
            <react_native_1.Text style={styles.details}>{meal.details}</react_native_1.Text>
        </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: { padding: 15, borderRadius: 20, backgroundColor: 'lightgray', marginVertical: 5 },
    mealName: { fontSize: 18, fontWeight: 'bold' },
    details: { fontSize: 14, color: 'gray' },
});
exports.default = MealBubble;
