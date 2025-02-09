// src/screens/LaunchScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const LaunchScreen = () => {
    const fadeAnim = useSharedValue(0);
    const navigation = useNavigation();

    useEffect(() => {
        // Start fade-in animation
        fadeAnim.value = withTiming(1, { duration: 1000 });
        const timer = setTimeout(() => {
            navigation.navigate('MainTabView');
        }, 1500);
        return () => clearTimeout(timer);
    }, [fadeAnim, navigation]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <View style={styles.content}>
                <Text style={styles.title}>Caloride</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    },
});

export default LaunchScreen;
