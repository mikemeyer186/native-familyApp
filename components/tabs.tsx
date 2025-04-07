import { withLayoutContext } from 'expo-router';
import { createNativeBottomTabNavigator, NativeBottomTabNavigationOptions, NativeBottomTabNavigationEventMap } from '@bottom-tabs/react-navigation';

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator;

export const Tabs = withLayoutContext<NativeBottomTabNavigationOptions, any, typeof BottomTabNavigator, NativeBottomTabNavigationEventMap>(
    BottomTabNavigator
);
