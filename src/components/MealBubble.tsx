import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BlurView } from '@react-native-community/blur';

interface Meal {
    id: string;
    name: string;
    details: string;
    calories: number;
}

interface Props {
    meal: Meal;
}

const MealBubble: React.FC<Props> = ({ meal }) => {
    return (
        <BlurView style={styles.blurContainer} blurType="dark" blurAmount={10}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.mealName}>{meal.name}</Text>
                    <Image source={require('../../assets/clock.png')} style={styles.icon} />
                </View>
                <Text style={styles.details}>{meal.details}</Text>
            </View>
        </BlurView>
    );
};

const styles = StyleSheet.create({
    blurContainer: {
        borderRadius: 20,
        overflow: 'hidden', // Required for BlurView to respect border radius
        marginHorizontal: 10,
    },
    container: {
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mealName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: 'white', // Make the icon white
    },
    details: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 8,
    },
});

export default MealBubble;
