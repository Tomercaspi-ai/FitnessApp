import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

// Define the type for navigation
type RootStackParamList = {
    MainTabView: undefined;
};

const LaunchScreen: React.FC = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current; // Use useRef to persist animated value
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'MainTabView'>>();

    useEffect(() => {
        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start();

            setTimeout(() => {
                navigation.replace('MainTabView');
            }, 1000);
        }, 1500);
    }, [fadeAnim, navigation]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <View style={styles.content}>
                <Image source={require('../../assets/bolt.png')} style={styles.logo} />
                <Text style={styles.title}>Caloride</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
    content: { alignItems: 'center' },
    logo: { width: 150, height: 150, tintColor: 'white' },
    title: { fontSize: 32, fontWeight: 'bold', color: 'white', marginTop: 20 },
});

export default LaunchScreen;
