import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_button: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  button: {
    width: 11 * rem,
    height: 4 * rem,
  },
  button_text: {
    color: "#26324A",
  },
});

export default styles;
