import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Meal {
    id: string;
    name: string;
    details: string;
}

const MealBubble: React.FC<{ meal: Meal }> = ({ meal }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.details}>{meal.details}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 15, borderRadius: 20, backgroundColor: 'lightgray', marginVertical: 5 },
    mealName: { fontSize: 18, fontWeight: 'bold' },
    details: { fontSize: 14, color: 'gray' },
});

export default MealBubble;
