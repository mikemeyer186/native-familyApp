import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/colors';

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
                    title: 'Listen',
                    headerLargeTitle: true,
                    headerRight: () => <Button title="Hinzufügen" />,
                }}
            />
        </Stack>
    );
};

export default Layout;

const styles = StyleSheet.create({});
