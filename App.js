import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { AppLoading } from "expo";
import {
    useFonts,
    Roboto_500Medium,
    Roboto_900Black,
    Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
    Nunito_400Regular,
    Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import HomeScreen from "./src/screens/home-screen/home-screen";
import ProfileScreen from "./src/screens/profile-screen/profile-screen";
import LoginScreen from "./src/screens/login-screen/login-screen";
import RegisterScreen from "./src/screens/register-screen/register-screen";
import HistoryScreen from "./src/screens/history-screen/history-screen";
import FindCarScreen from "./src/screens/find-car-screen/find-car-screen";
import TripInfoScreen from "./src/screens/trip-info-screen/trip-info-screen";
import RequestDetails from "./src/screens/request-details/request-details.conponent";
import FeedbackScreen from "./src/screens/feedback-screen/feedback-screen";
import PersonalInfoScreen from "./src/screens/personal-info-screen/personal-info-screen";

const MainNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
        Login: LoginScreen,
        Register: RegisterScreen,
        History: HistoryScreen,
        FindCar: FindCarScreen,
        TripInfo: TripInfoScreen,
        RequestDetails: RequestDetails,
        Feedback: FeedbackScreen,
        PersonalInfo: PersonalInfoScreen,
    },
    {
        initialRouteName: "Login", //change this att to change initial screen
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default () => {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_900Black,
        Roboto_700Bold,
        Nunito_400Regular,
        Nunito_800ExtraBold,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    // from the custom App we return the component we assigned to AppContainer.
    return <AppContainer />;
};
