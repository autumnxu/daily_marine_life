import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { ColorSchemeName, Pressable, TabBarIOSItem, Text } from 'react-native';
import HomeScreen from "../screens/homepage/HomepageScreen";
import DailyCreatureScreen from "../screens/daily_creature_page/DailyCreatureScreen";
import OpportunityScreen from "../screens/opportunity_page/OpportunityScreen";

export type RootStackParams = {
    HomeStack: undefined;
    DailyCreatureStack: undefined;
    OpportunityStack: undefined;
}
const Tab = createBottomTabNavigator<RootStackParams>();

export default function Navigation() {
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={
                ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name == 'HomeStack') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline'
                            return <Icon name={ iconName } size={ size } color={color} />
                        } else if (route.name == 'DailyCreatureStack') {
                            iconName = focused ? 'file-tray-stacked-sharp': 'file-tray-stacked-outline'
                            return <Icon name={ iconName } size={ size } color={color} />
                        } else if (route.name == 'OpportunityStack') {
                            iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline'
                            return <Icon name={ iconName } size={ size } color={color} />
                    }
                    },
                    headerShown: false
                })
            }>
                <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{tabBarLabel: "homepage", headerTransparent: true}}/>
                <Tab.Screen name="DailyCreatureStack" component={DailyCreatureStackScreen} options={{tabBarLabel: "Daily Creature", headerTransparent: true}}/>
                <Tab.Screen name="OpportunityStack" component={OpportunityStackScreen} options={{tabBarLabel: "Opportunities", headerTransparent: true}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
        </HomeStack.Navigator>
    )
}

const DailyCreatureStack = createNativeStackNavigator();

function DailyCreatureStackScreen() {
    return (
        <DailyCreatureStack.Navigator screenOptions={{ headerTransparent: false }}>
            <DailyCreatureStack.Screen name="daily_creature" component={DailyCreatureScreen} />
        </DailyCreatureStack.Navigator>
    )
}

const OpportunityStack = createNativeStackNavigator();

function OpportunityStackScreen() {
    return (
        <OpportunityStack.Navigator>
            <OpportunityStack.Screen name="opportunity" component={OpportunityScreen}/>
        </OpportunityStack.Navigator>
    )
}
