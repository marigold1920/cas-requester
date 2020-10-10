import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";

const styles = StyleSheet.create({
  //css for 4 parents containers:
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: "column",
  },
  //block 1:
  container_location_picking: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    // borderBottomColor: "red",
    // borderBottomWidth: 0.5,
  },
  //block 2:
  container_mapview: {
    flex: 2.3,
    justifyContent: "center",
    alignItems: "center",
  },
  //block 3:
  container_car_finding: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    // borderTopColor: "red",
    // borderTopWidth: 0.5,
  },

  //css for child component:
  //block 1:
  back_arrow: { flex: 1, marginTop: 34, marginLeft: 8 },
  block_icons_from_to: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 30,
  },
  icon_from_to: { width: 17, height: 17 },
  block_address: {
    flex: 7,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  address: {
    borderColor: "#DBDBDB",
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  block_reverse: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  button_reverse: { width: 2 * rem, height: 2 * rem },
  img_reverse: { width: 2 * rem, height: 2 * rem },
  //block 2:
  map_view: {
    marginTop: 25,
    width: 30 * rem,
    height: 30 * rem,
  },
  //block 3:
  img_background: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#DBDBDB",
    padding: 8,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  car_icon: { width: 3 * rem, height: 3 * rem },
  block_button: {
    width: 17 * rem,
    height: 4.5 * rem,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFAB2E",
    width: 17 * rem,
    height: 4.5 * rem,
    borderRadius: 10,
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
  },
});

export default styles;
