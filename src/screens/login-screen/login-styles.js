import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  background_image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  //css for block app_logo-name
  block_logo_name: {
    flex: 2,
    marginTop: 40,
  },
  //css for block button
  block_button: { flex: 4, flexDirection: "column" },
});

export default styles;
