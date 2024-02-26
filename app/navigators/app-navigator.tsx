import React from 'react';
import { RouteProp } from "@react-navigation/core";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from ".";
import { ChangeLanguage, News, NewsDetails, Settings } from "../screens";
import { Article } from '../services/api/api-types';
import { translate } from '../i18n';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useColorScheme } from 'react-native';
import { CustomDarkTheme, CustomLightTheme } from '../theme';
import linking from '../linking';

// Types
interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> { }
interface NewsStackProps { };
interface SettingsStackProps { };
interface BottomTabProps { };

export type NewsParamList = {
    News: { searchTerm?: string };
    NewsDetails: { article: Article };
};

export type NewsNavProps<T extends keyof NewsParamList> = {
    navigation: StackNavigationProp<NewsParamList, T>;
    route: RouteProp<NewsParamList, T>;
};

export type SettingsParamList = {
    Settings: undefined;
    ChangeLanguage: undefined;
}

export type SettingsNavProps<T extends keyof SettingsParamList> = {
    navigation: StackNavigationProp<SettingsParamList, T>;
    route: RouteProp<SettingsParamList, T>;
}


// Navigators
const NewsStack: React.FC<NewsStackProps> = () => {
    const Stack = createNativeStackNavigator<NewsParamList>();
    return (
        <Stack.Navigator
            initialRouteName="News"
        >
            <Stack.Screen name="News" component={News} options={{ title: translate("news.title") }} />
            <Stack.Screen name="NewsDetails" component={NewsDetails} options={{ title: translate("newsDetails.title") }} />
        </Stack.Navigator>
    )
}

const SettingsStack: React.FC<SettingsStackProps> = () => {
    const Stack = createNativeStackNavigator<SettingsParamList>();
    return (
        <Stack.Navigator
            initialRouteName="Settings"
        >
            <Stack.Screen name="Settings" component={Settings} options={{ title: translate("settings.title") }} />
            <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} options={{ title: translate("changeLanguage.title") }} />
        </Stack.Navigator>
    )
}

const BottomTab: React.FC<BottomTabProps> = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="NewsStack"
                component={NewsStack}
                options={{
                    title: translate("news.title"),
                    tabBarIcon: ({ color }) => { return <FontAwesome5Icon name="newspaper" size={25} color={color} /> }
                }} />
            <Tab.Screen
                name="SettingsStack"
                component={SettingsStack}
                options={{
                    title: translate("settings.title"),
                    tabBarIcon: ({ color }) => { return <FontAwesome5Icon name="cog" size={25} color={color} /> }
                }} />
        </Tab.Navigator>
    )
}

export const AppNavigator: React.FC<NavigationProps> = (props: NavigationProps) => {
    const scheme = useColorScheme();
    return (
        <NavigationContainer
            ref={navigationRef}
            linking={linking}
            theme={scheme == 'dark' ? CustomDarkTheme : CustomLightTheme}
            {...props}
        >
            <BottomTab />
        </NavigationContainer>
    )
}