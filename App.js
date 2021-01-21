import React from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Provider } from "react-redux";

import store from "./src/redux/store";

import Navigation from "./src/screens/navigations/navigation.component";

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
                <Navigation />
            </Provider>
        );
    }
}
