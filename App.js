import React from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";

import store from "./src/redux/store";

import HomeScreen from "./src/screens/home/home.component";
import ProfileScreen from "./src/screens/profile/profile.component";
import LoginScreen from "./src/screens/login/login.component";
import RegisterScreen from "./src/screens/register/register.component";
import HistoryScreen from "./src/screens/history/history.component";
import FindCarScreen from "./src/screens/find-car/find-car.component";
import RequestInfo from "./src/screens/request-info/request-info.component";
import RequestDetails from "./src/screens/request-details/request-details.conponent";
import FeedbackScreen from "./src/screens/feedback/feedback.component";
import PersonalInfoScreen from "./src/screens/personal-info/personal-info.component";
import OtpScreen from "./src/screens/otp/otp.component";

import ResetPassScreen from "./src/screens/reset-password/reset-password.component";

const MainNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
        Login: LoginScreen,
        Register: RegisterScreen,
        History: HistoryScreen,
        FindCar: FindCarScreen,
        RequestInfo: RequestInfo,
        RequestDetails: RequestDetails,
        Feedback: FeedbackScreen,
        PersonalInfo: PersonalInfoScreen,
        Otp: OtpScreen,
        ResetPass: ResetPassScreen
    },
    {
        initialRouteName: "Login", //change this att to change initial screen
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
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
