import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

interface Meal {
    id: string;
    name: string;
    carbs: string;
    protein: string;
    vegetables: string;
    calories: number;
}

interface Props {
    visible: boolean;
    meal: Meal;
    onClose: () => void;
    onSave: (updatedMeal: Meal) => void;
}

const MealEdit: React.FC<Props> = ({ visible, meal, onClose, onSave }) => {
    const [mealCalories, setMealCalories] = useState(meal.calories);

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Edit Meal</Text>

                    <Text style={styles.label}>Calories</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={mealCalories.toString()}
                        onChangeText={(value) => setMealCalories(Number(value))}
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onSave({ ...meal, calories: mealCalories })} style={styles.saveButton}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modal: { backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    label: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 8, width: '100%', borderRadius: 5, textAlign: 'center' },
    buttonContainer: { flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', width: '100%' },
    cancelButton: { backgroundColor: 'gray', padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
    saveButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
    buttonText: { color: 'white', fontSize: 16 },
});

export default MealEdit;
