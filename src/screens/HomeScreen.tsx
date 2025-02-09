import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import MealBubble from '../components/MealBubble';  // Custom Meal Component
import MealDetail from '../components/MealDetail';  // Custom Modal Component

interface Meal {
    id: string;
    name: string;
    details: string;
    calories: number;
}

// Sample Meals Data
const initialMeals: Meal[] = [
    { id: '1', name: 'Breakfast', details: 'Oatmeal, toast, fruit', calories: 400 },
    { id: '2', name: 'Lunch', details: 'Pasta, rice, quinoa', calories: 700 },
    { id: '3', name: 'Dinner', details: 'Chicken, sweet potato, vegetables', calories: 800 },
    { id: '4', name: 'Snack', details: 'Yogurt, nuts, fruit', calories: 300 },
];

const HomeScreen: React.FC = () => {
    const [meals, setMeals] = useState<Meal[]>(initialMeals);
    const [totalCalories, setTotalCalories] = useState(1100);
    const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [eatenMeals, setEatenMeals] = useState<Set<string>>(new Set());

    const caloriesTarget = 2200;
    const caloriesBurned = 1800;

    const handleToggleMeal = (meal: Meal) => {
        setEatenMeals((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(meal.id)) {
                newSet.delete(meal.id);
                setTotalCalories(totalCalories - meal.calories);
            } else {
                newSet.add(meal.id);
                setTotalCalories(totalCalories + meal.calories);
            }
            return newSet;
        });
    };

    const mealForCurrentTime = (): Meal | undefined => {
        const hour = new Date().getHours();
        if (hour >= 8 && hour <= 11) return meals.find((meal) => meal.name === 'Breakfast');
        if (hour >= 12 && hour <= 15) return meals.find((meal) => meal.name === 'Lunch');
        if (hour >= 16 && hour <= 20) return meals.find((meal) => meal.name === 'Dinner');
        return meals.find((meal) => meal.name === 'Snack');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Caloride</Text>

            {/* Calories Rings */}
            <View style={styles.ringsContainer}>
                <Svg height="220" width="220">
                    {/* Outer Ring - Consumed Calories */}
                    <Circle cx="110" cy="110" r="80" stroke="green" strokeWidth="15" fill="none"
                            strokeDasharray={`${(totalCalories / caloriesTarget) * 100} 100`} />
                </Svg>
                <Svg height="160" width="160">
                    {/* Inner Ring - Burned Calories */}
                    <Circle cx="80" cy="80" r="60" stroke="red" strokeWidth="10" fill="none" />
                </Svg>
                {/* Center Text */}
                <View style={styles.caloriesInfo}>
                    <Text style={styles.caloriesText}>Consumed</Text>
                    <Text style={styles.caloriesValue}>{totalCalories} / {caloriesTarget}</Text>
                    <Text style={styles.caloriesText}>Burned</Text>
                    <Text style={styles.caloriesValue}>{caloriesBurned} cal</Text>
                </View>
            </View>

            {/* Meal Bubble Button */}
            {mealForCurrentTime() && (
                <View style={styles.mealContainer}>
                    <TouchableOpacity onPress={() => handleToggleMeal(mealForCurrentTime()!)}>
                        <Text style={[styles.checkmark, eatenMeals.has(mealForCurrentTime()!.id) ? styles.checked : styles.unchecked]}>
                            {eatenMeals.has(mealForCurrentTime()!.id) ? '✓' : '○'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setSelectedMeal(mealForCurrentTime()!);
                        setModalVisible(true);
                    }}>
                        <MealBubble meal={mealForCurrentTime()!} />
                    </TouchableOpacity>
                </View>
            )}

            {/* Meal Detail Modal */}
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <MealDetail meal={selectedMeal} onClose={() => setModalVisible(false)} />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black', paddingTop: 40, alignItems: 'center' },
    header: { fontSize: 36, fontWeight: 'bold', color: 'white', marginBottom: 20 },
    ringsContainer: { alignItems: 'center', justifyContent: 'center', position: 'relative' },
    caloriesInfo: { position: 'absolute', alignItems: 'center' },
    caloriesText: { fontSize: 14, color: 'white' },
    caloriesValue: { fontSize: 20, fontWeight: 'bold', color: 'white' },
    mealContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
    checkmark: { fontSize: 28, marginRight: 10 },
    checked: { color: 'green' },
    unchecked: { color: 'gray' },
});

export default HomeScreen;
