import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: Colors.light.background,
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    headerRight: () => <Ionicons name="settings-outline" size={24}></Ionicons>,
                }}
            />
        </Stack>
    );
};

export default Layout;

const styles = StyleSheet.create({});
