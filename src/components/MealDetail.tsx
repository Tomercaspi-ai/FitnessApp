import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

interface Meal {
  id: string;
  name: string;
  details: string;
  calories: number;
}

interface Props {
  meal: Meal;
  onClose: () => void;
}

const MealDetail: React.FC<Props> = ({ meal, onClose }) => {
  return (
      <Modal transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.title}>{meal.name}</Text>
            <Text style={styles.details}>{meal.details}</Text>
            <Text style={styles.calories}>{meal.calories} Calories</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modal: { width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  details: { fontSize: 18, marginBottom: 10 },
  calories: { fontSize: 18, color: 'red', marginBottom: 20 },
  closeButton: { backgroundColor: 'gray', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 16 },
});

export default MealDetail;
