"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const MealEdit = ({ meal, visible, onClose, onSave }) => {
    if (!meal)
        return null; // ✅ Ensure `meal` exists before rendering
    return (<react_native_1.Modal visible={visible} transparent animationType="slide">
            <react_native_1.View style={styles.overlay}>
                <react_native_1.View style={styles.modal}>
                    <react_native_1.Text style={styles.title}>Edit {meal.name}</react_native_1.Text>
                    {/* Add meal editing logic here */}
                    <react_native_1.TouchableOpacity onPress={onClose}>
                        <react_native_1.Text style={styles.button}>Close</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.Modal>);
};
const styles = react_native_1.StyleSheet.create({
    overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modal: { width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    button: { fontSize: 16, color: 'blue', marginTop: 20, textAlign: 'center' }
});
exports.default = MealEdit;
