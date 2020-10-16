import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import * as Font from "expo-font";
import { AppLoading } from "expo";

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
import OtpScreen from "./src/screens/otp/otp.component";
import ResetPassScreen from "./src/screens/reset-password-screen/reset-password-screen";
import FindCarScreen01 from './src/screens/find-car-screen-v01/find-car-screen';


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
        Otp: OtpScreen,
        ResetPass: ResetPassScreen
    },
    {
        initialRouteName: "FindCar01", //change this att to change initial screen
        defaultNavigationOptions: {
            headerShown: false
        }
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    state = {
        assetsLoaded: false
    };

    async componentDidMount() {
        await Font.loadAsync({
            "Texgyreadventor-bold": require("./assets/fonts/Texgyreadventor-bold.otf"),
            "Texgyreadventor-regular": require("./assets/fonts/Texgyreadventor-regular.otf")
        });

        this.setState({ assetsLoaded: true });
    }

    render() {
        const { assetsLoaded } = this.state;
        if (!assetsLoaded) {
            return <AppLoading />;
        }
        // from the custom App we return the component we assigned to AppContainer.
        return <AppContainer />;
    }
}
