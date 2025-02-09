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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const MealBubble_1 = __importDefault(require("../components/MealBubble"));
const MealDetail_1 = __importDefault(require("../components/MealDetail"));
const HomeScreen = () => {
    const [meals, setMeals] = (0, react_1.useState)([
        { id: '1', name: 'Breakfast', details: 'Oatmeal, toast, fruit', calories: 400 },
        { id: '2', name: 'Lunch', details: 'Pasta, rice, quinoa', calories: 700 },
        { id: '3', name: 'Dinner', details: 'Chicken, sweet potato, vegetables', calories: 800 },
        { id: '4', name: 'Snack', details: 'Yogurt, nuts, fruit', calories: 300 },
    ]);
    const [selectedMeal, setSelectedMeal] = (0, react_1.useState)(null);
    const [modalVisible, setModalVisible] = (0, react_1.useState)(false);
    const [eatenMeals, setEatenMeals] = (0, react_1.useState)(new Set());
    const toggleMealEaten = (meal) => {
        setEatenMeals((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(meal.id)) {
                newSet.delete(meal.id);
            }
            else {
                newSet.add(meal.id);
            }
            return newSet;
        });
    };
    return (<react_native_1.View style={styles.container}>
            <react_native_1.Text style={styles.header}>Caloride</react_native_1.Text>

            <react_native_1.FlatList data={meals} keyExtractor={(meal) => meal.id} renderItem={({ item }) => (<react_native_1.TouchableOpacity onPress={() => { setSelectedMeal(item); setModalVisible(true); }}>
                        <react_native_1.View style={styles.mealRow}>
                            <react_native_1.TouchableOpacity onPress={() => toggleMealEaten(item)} style={styles.checkmarkButton}>
                                <react_native_1.Text style={[styles.checkmark, eatenMeals.has(item.id) ? styles.checked : styles.unchecked]}>
                                    {eatenMeals.has(item.id) ? '✓' : '○'}
                                </react_native_1.Text>
                            </react_native_1.TouchableOpacity>
                            <MealBubble_1.default meal={item}/>
                        </react_native_1.View>
                    </react_native_1.TouchableOpacity>)}/>

            <react_native_1.Modal visible={modalVisible} transparent animationType="slide">
                {selectedMeal && <MealDetail_1.default meal={selectedMeal} onClose={() => setModalVisible(false)}/>}
            </react_native_1.Modal>
        </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', padding: 10 },
    header: { fontSize: 36, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 20 },
    mealRow: { flexDirection: 'row', alignItems: 'center', padding: 10 },
    checkmarkButton: { marginRight: 10 },
    checkmark: { fontSize: 28 },
    checked: { color: 'green' },
    unchecked: { color: 'gray' },
});
exports.default = HomeScreen;
