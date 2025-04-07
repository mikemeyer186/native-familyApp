import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';

export default function Index() {
    const auth = getAuth();
    const router = useRouter();
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    onAuthStateChanged(auth, (user: FirebaseAuthTypes.User) => {
        if (user) {
            setUser(user);
            router.replace('/(tabs)/dashboard');
        } else {
            setUser(null);
            router.replace('/login');
        }
    });

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
