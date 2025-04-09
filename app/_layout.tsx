import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '@/contexts/authContext';

export default function RootLayout() {
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="login" options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
            </Stack>
        </AuthProvider>
    );
}
