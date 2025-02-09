import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import MealBubble from '../components/MealBubble';
import MealDetail from '../components/MealDetail';

interface Meal {
    id: string;
    name: string;
    details: string;
    calories: number;
}

const HomeScreen: React.FC = () => {
    const [meals, setMeals] = useState<Meal[]>([
        { id: '1', name: 'Breakfast', details: 'Oatmeal, toast, fruit', calories: 400 },
        { id: '2', name: 'Lunch', details: 'Pasta, rice, quinoa', calories: 700 },
        { id: '3', name: 'Dinner', details: 'Chicken, sweet potato, vegetables', calories: 800 },
        { id: '4', name: 'Snack', details: 'Yogurt, nuts, fruit', calories: 300 },
    ]);

    const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [eatenMeals, setEatenMeals] = useState<Set<string>>(new Set());

    const toggleMealEaten = (meal: Meal) => {
        setEatenMeals((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(meal.id)) {
                newSet.delete(meal.id);
            } else {
                newSet.add(meal.id);
            }
            return newSet;
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Caloride</Text>

            <FlatList
                data={meals}
                keyExtractor={(meal) => meal.id}
                renderItem={({ item }: { item: Meal }) => (
                    <TouchableOpacity onPress={() => { setSelectedMeal(item); setModalVisible(true); }}>
                        <View style={styles.mealRow}>
                            <TouchableOpacity onPress={() => toggleMealEaten(item)} style={styles.checkmarkButton}>
                                <Text style={[styles.checkmark, eatenMeals.has(item.id) ? styles.checked : styles.unchecked]}>
                                    {eatenMeals.has(item.id) ? '✓' : '○'}
                                </Text>
                            </TouchableOpacity>
                            <MealBubble meal={item} />
                        </View>
                    </TouchableOpacity>
                )}
            />

            <Modal visible={modalVisible} transparent animationType="slide">
                {selectedMeal && <MealDetail meal={selectedMeal} onClose={() => setModalVisible(false)} />}
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', padding: 10 },
    header: { fontSize: 36, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 20 },
    mealRow: { flexDirection: 'row', alignItems: 'center', padding: 10 },
    checkmarkButton: { marginRight: 10 },
    checkmark: { fontSize: 28 },
    checked: { color: 'green' },
    unchecked: { color: 'gray' },
});

export default HomeScreen;
