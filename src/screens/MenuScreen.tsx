import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import MealEdit from '../components/MealEdit';
import { Meal } from '../types';  // ✅ Ensure you import `Meal` from the correct file

const MenuScreen: React.FC = () => {
    // ✅ Define state with correct types
    const [meals, setMeals] = useState<Meal[]>([]);
    const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

    // ✅ Function to update meals correctly
    const updateMeal = (updatedMeal: Meal) => {
        setMeals(prevMeals =>
            prevMeals.map(meal => meal.id === updatedMeal.id ? updatedMeal : meal)
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Menu</Text>
            <FlatList
                data={meals}
                keyExtractor={(meal) => meal.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedMeal(item)}>
                        <View style={styles.mealItem}>
                            <Text style={styles.mealName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            {selectedMeal && (
                <MealEdit
                    meal={selectedMeal}
                    visible={!!selectedMeal} // ✅ Ensure `visible` is always a boolean
                    onClose={() => setSelectedMeal(null)}
                    onSave={updateMeal}
                />
            )}
            </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: 'white' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    mealItem: { padding: 15, backgroundColor: '#f9f9f9', marginBottom: 10, borderRadius: 8 },
    mealName: { fontSize: 18 },
});

export default MenuScreen;
