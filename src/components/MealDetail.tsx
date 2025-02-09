import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import MealEdit from './MealEdit'; // Edit Meal Component

interface Meal {
  id: string;
  name: string;
  carbs: string;
  protein: string;
  vegetables: string;
  calories: number;
}

interface Props {
  meal: Meal | null;
  onClose: () => void;
}

const MealDetail: React.FC<Props> = ({ meal, onClose }) => {
  const [isMealEaten, setIsMealEaten] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [mealCalories, setMealCalories] = useState(meal?.calories || 0);

  if (!meal) return null;

  return (
      <Modal transparent={true} animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            {/* Header: Meal Name + Eaten Button */}
            <View style={styles.header}>
              <Text style={styles.title}>{meal.name}</Text>
              <TouchableOpacity onPress={() => setIsMealEaten(!isMealEaten)}>
                <Text style={[styles.checkmark, isMealEaten ? styles.checked : styles.unchecked]}>
                  {isMealEaten ? '✓' : '○'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Calories Input */}
            <View style={styles.section}>
              <Text style={styles.label}>Calories</Text>
              <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={mealCalories.toString()}
                  onChangeText={(value) => setMealCalories(Number(value))}
              />
            </View>

            {/* Meal Details */}
            <View style={styles.section}>
              <Text style={styles.label}>Carbs</Text>
              <Text style={styles.details}>{meal.carbs}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Protein</Text>
              <Text style={styles.details}>{meal.protein}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Vegetables</Text>
              <Text style={styles.details}>{meal.vegetables}</Text>
            </View>

            {/* Buttons: Edit & Close */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={() => setShowEditModal(true)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>

            {/* Meal Edit Modal */}
            <MealEdit
                visible={showEditModal}
                meal={meal}
                onClose={() => setShowEditModal(false)}
                onSave={(updatedMeal) => {
                  setMealCalories(updatedMeal.calories);
                  setShowEditModal(false);
                }}
            />
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  checkmark: { fontSize: 28 },
  checked: { color: 'green' },
  unchecked: { color: 'gray' },
  section: { marginBottom: 15, width: '100%' },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  details: { fontSize: 16, color: '#666' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontSize: 16 },
});

export default MealDetail;
