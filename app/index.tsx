import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/authContext';
import { StyleSheet, Text, View } from 'react-native';

export default function index() {
    const { authCheck } = useAuth();

    function checkAuthState() {
        authCheck();
    }

    useEffect(() => {
        checkAuthState();
    }, []);

    return (
        <View style={styles.pageWrapper}>
            <Text>Login...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pageWrapper: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
