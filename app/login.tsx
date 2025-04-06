import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
    const auth = getAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                setEmail('');
                setPassword('');
            } catch (error) {
                console.error('Fehler beim Login:', error);
                Alert.alert('Login-Daten nicht korrekt!');
            }
        } else {
            Alert.alert('Bitte Login-Daten eingeben!');
        }
    };

    return (
        <View style={styles.pageWrapper}>
            <Text style={styles.header}>Bitte melde dich an:</Text>
            <Text style={styles.label}>E-Mail:</Text>
            <TextInput
                style={styles.input}
                textContentType="emailAddress"
                value={email}
                onChangeText={setEmail}
                placeholder="example@mail.com"
                keyboardType="email-address"
            ></TextInput>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="******"
                keyboardType="visible-password"
            ></TextInput>
            <Button onPress={handleLogin} title="Login" />
        </View>
    );
}

const styles = StyleSheet.create({
    pageWrapper: {
        padding: 16,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 20,
        marginBottom: 32,
    },

    label: {
        fontSize: 14,
        width: '75%',
        paddingLeft: 4,
    },

    link: {
        color: 'blue',
    },

    input: {
        height: 40,
        width: '75%',
        margin: 12,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 16,
        padding: 10,
        backgroundColor: 'white',
    },
});
