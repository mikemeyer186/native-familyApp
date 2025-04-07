import { StyleSheet } from 'react-native';
import { Tabs } from '@/components/tabs';
import { Colors } from '@/constants/colors';

export default function TabLayout() {
    return (
        <Tabs
            ignoresTopSafeArea
            hapticFeedbackEnabled
            screenOptions={{
                tabBarActiveTintColor: Colors.light.tintPrimary,
            }}
        >
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: 'Dashboard',
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ focused }) => ({ sfSymbol: focused ? 'chart.bar.fill' : 'chart.bar' }),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="finance"
                options={{
                    title: 'Finanzen',
                    tabBarLabel: 'Finanzen',
                    tabBarIcon: ({ focused }) => ({ sfSymbol: focused ? 'eurosign.square.fill' : 'eurosign.square' }),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="calendar"
                options={{
                    title: 'Kalender',
                    tabBarLabel: 'Kalender',
                    tabBarIcon: ({ focused }) => ({ sfSymbol: focused ? 'calendar.circle.fill' : 'calendar.circle' }),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="lists"
                options={{
                    title: 'Listen',
                    tabBarLabel: 'Listen',
                    tabBarIcon: ({ focused }) => ({ sfSymbol: focused ? 'list.clipboard.fill' : 'list.clipboard' }),
                }}
            ></Tabs.Screen>
        </Tabs>
    );
}

const styles = StyleSheet.create({});
