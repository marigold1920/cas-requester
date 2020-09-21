import HomeScreen from "./src/Components/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ComponentScreen from "./src/Components/ComponentScreen";
import ListScreen from "./src/Components/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "CAS",
    },
  }
);
export default createAppContainer(navigator);
