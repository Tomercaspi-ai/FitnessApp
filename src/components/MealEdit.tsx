// src/components/MealEdit.tsx
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Meal } from '../types';

interface MealEditProps {
    meal: Meal | null;
    visible: boolean;
    onClose: () => void;
    onSave?: (updatedMeal: Meal) => void;
}

const MealEdit: React.FC<MealEditProps> = ({ meal, visible, onClose }) => {
    if (!meal) {
        return null;
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Edit {meal.name}</Text>
                    {/* Add meal editing logic here */}
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.button}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    button: {
        marginTop: 10,
        fontSize: 16,
        color: 'blue',
    },
});

export default MealEdit;
