import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    LaunchScreen: undefined;
    MainTabView: undefined;  // ✅ Add the correct type for navigation
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'LaunchScreen'>;

const LaunchScreen = () => {
    const fadeAnim = useSharedValue(0);
    const navigation = useNavigation<NavigationProp>();  // ✅ Ensure correct typing

    useEffect(() => {
        fadeAnim.value = withTiming(1, { duration: 1000 });

        setTimeout(() => {
            navigation.navigate('MainTabView');  // ✅ Fixes the error
        }, 1500);
    }, );

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
