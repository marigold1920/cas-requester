import { Dimensions } from "react-native";

const rem = Dimensions.get("screen").width / 30;

const deviceRevolution = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
};

export { deviceRevolution };

export default rem;
