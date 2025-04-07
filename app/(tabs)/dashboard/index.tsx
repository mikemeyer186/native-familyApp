import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getAuth, signOut } from '@react-native-firebase/auth';

export default function dashboard() {
    const auth = getAuth();

    async function handleLogout() {
        signOut(auth)
            .then(() => {
                Alert.alert('Du bist jetzt abgemeldet');
            })
            .catch((error) => {
                console.log('Fehler beim sign out: ', error);
                Alert.alert('Etwas hat nicht funktioniert. Bitte probiere es erneut.');
            });
    }

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
                <Button onPress={handleLogout} title="Abmelden" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
