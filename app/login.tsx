import React, { useState } from 'react';
import { useAuth } from '@/contexts/authContext';
import { Colors } from '@/constants/colors';
import { Alert, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Webbrowser from 'expo-web-browser';

export default function Login() {
    const { signInUser } = useAuth();
    const { top } = useSafeAreaInsets();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email && password) {
            await signInUser(email, password);
            setEmail('');
            setPassword('');
        } else {
            Alert.alert('Bitte Login-Daten eingeben!');
        }
    };

    const handleOpenBrowser = async (url: string) => {
        await Webbrowser.openBrowserAsync(url);
    };

    return (
        <View style={[styles.pageWrapper, { paddingTop: top }]}>
            <Text style={styles.logoText}>familyApp</Text>
            <Image source={require('@/assets/images/logo_blue.png')} style={styles.logoImage} />
            <View style={styles.loginContainer}>
                <Text style={styles.header}>Bitte melde dich an:</Text>
                <Text style={styles.label}>E-Mail</Text>
                <TextInput
                    style={styles.input}
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@mail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect={false}
                ></TextInput>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="******"
                    secureTextEntry
                    keyboardType="visible-password"
                ></TextInput>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Ionicons name="log-in-outline" size={24} color={Colors.light.buttonText}></Ionicons>
                    <Text style={styles.buttonText}>Anmelden</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.links}>
                <Text onPress={() => handleOpenBrowser('https://familyapp.mike-meyer.dev/imprint')} style={styles.linksText}>
                    Impressum
                </Text>
                <Text style={styles.linksText}>|</Text>
                <Text onPress={() => handleOpenBrowser('https://familyapp.mike-meyer.dev/dataprotection')} style={styles.linksText}>
                    Datenschutz
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageWrapper: {
        gap: 32,
        marginTop: 32,
    },

    logoText: {
        fontSize: 36,
        fontWeight: 700,
        alignSelf: 'center',
        color: Colors.light.tintSecondary,
    },

    logoImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        alignSelf: 'center',
    },

    loginContainer: {
        marginHorizontal: 20,
    },

    header: {
        fontSize: 20,
        marginBottom: 32,
        alignSelf: 'center',
    },

    label: {
        fontSize: 14,
        paddingLeft: 4,
        marginBottom: 8,
    },

    input: {
        height: 40,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: Colors.light.thinBorder,
        borderRadius: 16,
        padding: 10,
        backgroundColor: Colors.light.background,
    },

    button: {
        marginTop: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: Colors.light.buttonBackground,
        borderRadius: 16,
        padding: 4,
        width: '50%',
        alignSelf: 'center',
    },

    buttonText: {
        fontWeight: 500,
        color: Colors.light.buttonText,
    },

    links: {
        flexDirection: 'row',
        gap: 16,
        alignSelf: 'center',
    },

    linksText: {
        fontSize: 12,
        color: Colors.light.lightText,
    },
});
