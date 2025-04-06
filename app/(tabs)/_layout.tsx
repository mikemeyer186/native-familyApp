import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="dashboard"
                options={{
                    tabBarLabel: 'Dashboard',
                    headerTitle: 'Dashboard',
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="finance"
                options={{
                    tabBarLabel: 'Finanzen',
                    headerTitle: 'Finanzen',
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="calendar"
                options={{
                    tabBarLabel: 'Kalendar',
                    headerTitle: 'Kalendar',
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="lists"
                options={{
                    tabBarLabel: 'Listen',
                    headerTitle: 'Listen',
                }}
            ></Tabs.Screen>
        </Tabs>
    );
}

const styles = StyleSheet.create({});
