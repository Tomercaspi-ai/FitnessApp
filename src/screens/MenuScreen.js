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
const MealEdit_1 = __importDefault(require("../components/MealEdit"));
const MenuScreen = () => {
    // ✅ Define state with correct types
    const [meals, setMeals] = (0, react_1.useState)([]);
    const [selectedMeal, setSelectedMeal] = (0, react_1.useState)(null);
    // ✅ Function to update meals correctly
    const updateMeal = (updatedMeal) => {
        setMeals(prevMeals => prevMeals.map(meal => meal.id === updatedMeal.id ? updatedMeal : meal));
    };
    return (<react_native_1.View style={styles.container}>
            <react_native_1.Text style={styles.header}>Menu</react_native_1.Text>
            <react_native_1.FlatList data={meals} keyExtractor={(meal) => meal.id} renderItem={({ item }) => (<react_native_1.TouchableOpacity onPress={() => setSelectedMeal(item)}>
                        <react_native_1.View style={styles.mealItem}>
                            <react_native_1.Text style={styles.mealName}>{item.name}</react_native_1.Text>
                        </react_native_1.View>
                    </react_native_1.TouchableOpacity>)}/>
            {selectedMeal && (<MealEdit_1.default meal={selectedMeal} visible={!!selectedMeal} // ✅ Ensure `visible` is always a boolean
         onClose={() => setSelectedMeal(null)} onSave={updateMeal}/>)}
        </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: 'white' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    mealItem: { padding: 15, backgroundColor: '#f9f9f9', marginBottom: 10, borderRadius: 8 },
    mealName: { fontSize: 18 }
});
exports.default = MenuScreen;
