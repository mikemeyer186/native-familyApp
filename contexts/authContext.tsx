import React, { createContext, useContext, useState } from 'react';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

// Types
interface AuthContextType {
    activeUser: FirebaseAuthTypes.User | null;
    authCheck: () => void;
    signInUser: (email: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

// This context provides the authentication of the user
export const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: AuthProviderProps) {
    const auth = getAuth();
    const router = useRouter();
    const [activeUser, setActiveUser] = useState<FirebaseAuthTypes.User | null>(null);

    async function authCheck() {
        onAuthStateChanged(auth, (user: FirebaseAuthTypes.User) => {
            if (user) {
                setActiveUser(user);
                router.replace('/(tabs)/dashboard');
            } else {
                setActiveUser(null);
                router.replace('/login');
            }
        });
    }

    async function signInUser(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setActiveUser(user);
        } catch (error) {
            console.error('Fehler beim Login:', error);
            Alert.alert('Login-Daten nicht korrekt!');
        }
    }

    return <AuthContext.Provider value={{ activeUser, authCheck, signInUser }}>{children}</AuthContext.Provider>;
}

function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuth };
