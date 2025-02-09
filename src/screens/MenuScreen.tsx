// src/screens/MenuScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import MealEdit from '../components/MealEdit';
import { Meal } from '../types';

const MenuScreen: React.FC = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

    const updateMeal = (updatedMeal: Meal) => {
        setMeals(prevMeals =>
            prevMeals.map(meal => (meal.id === updatedMeal.id ? updatedMeal : meal))
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
                    visible={!!selectedMeal}
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
