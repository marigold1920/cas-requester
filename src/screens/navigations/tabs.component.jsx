import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FindAmbulanceScreen from "../find-ambulance/find-ambulance.component";
import ProfileScreen from "../profile/profile.component";
import HistoryScreen from "../history/history.component";
import PersonalInfoScreen from "../personal-info/personal-info.component";

const Tab = createBottomTabNavigator();

const COLORS = {
    primary: "#fc6d3f",
    secondary: "#cdcdd2",
    white: "#fff"
};

const Tabs = () => (
    <Tab.Navigator
        tabBarOptions={{
            style: styles.navigator,
            activeTintColor: COLORS.primary,
            labelStyle: styles.label,
            keyboardHidesTabBar: true
        }}
        initialRouteName="Tìm xe"
    >
        <Tab.Screen
            name="Tìm xe"
            component={FindAmbulanceScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        size={18}
                        color={focused ? COLORS.primary : COLORS.secondary}
                        name="ambulance"
                    />
                )
            }}
        />
        <Tab.Screen
            name="Lịch sử"
            component={HistoryScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        size={18}
                        color={focused ? COLORS.primary : COLORS.secondary}
                        name="hourglass-half"
                    />
                ),
                unmountOnBlur: true
            }}
        />
        <Tab.Screen
            name="Sức khỏe"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        size={18}
                        color={focused ? COLORS.primary : COLORS.secondary}
                        name="heartbeat"
                    />
                )
            }}
        />
        <Tab.Screen
            name="Tài khoản"
            component={PersonalInfoScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        size={18}
                        color={focused ? COLORS.primary : COLORS.secondary}
                        name="user-cog"
                    />
                )
            }}
        />
    </Tab.Navigator>
);

export default Tabs;

const styles = StyleSheet.create({
    navigator: {
        position: "relative",
        borderTopWidth: 0.25,
        backgroundColor: "white",
        elevation: 0,
        height: 45,
        paddingTop: 10
    },
    tabActive: {
        top: -16,
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: COLORS.primary
    },
    label: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 11,
        marginBottom: 2
    }
});
