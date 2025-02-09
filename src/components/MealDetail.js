"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const MealDetail = ({ meal, onClose }) => {
    return (<react_native_1.Modal transparent animationType="slide">
        <react_native_1.View style={styles.overlay}>
          <react_native_1.View style={styles.modal}>
            <react_native_1.Text style={styles.title}>{meal.name}</react_native_1.Text>
            <react_native_1.Text style={styles.details}>{meal.details}</react_native_1.Text>
            <react_native_1.Text style={styles.calories}>{meal.calories} Calories</react_native_1.Text>
            <react_native_1.TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <react_native_1.Text style={styles.buttonText}>Close</react_native_1.Text>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.Modal>);
};
const styles = react_native_1.StyleSheet.create({
    overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    modal: { width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    details: { fontSize: 18, marginBottom: 10 },
    calories: { fontSize: 18, color: 'red', marginBottom: 20 },
    closeButton: { backgroundColor: 'gray', padding: 10, borderRadius: 5 },
    buttonText: { color: 'white', fontSize: 16 },
});
exports.default = MealDetail;
