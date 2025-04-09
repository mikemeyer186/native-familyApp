import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/colors';
import { useAuth } from '@/contexts/authContext';

export default function Layout() {
    const HeaderMenu = () => {
        const { activeUser } = useAuth();
        const userImage = activeUser?.photoURL;
        const defaultUserImage = require('@/assets/images/default_user.png');
        return <Image source={userImage ? { uri: userImage } : defaultUserImage} style={styles.headerMenuImage} />;
    };

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
                    headerRight: () => <HeaderMenu />,
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({
    headerMenuImage: {
        width: 35,
        height: 35,
        borderRadius: '50%',
    },
});
