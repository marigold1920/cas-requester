import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  //css for header
  headerBlock: {
    flex: 0.6,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  headerProfile: {
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  headerText: {
    fontSize: 28,
    color: "#494958",
    fontFamily: "Roboto-Black",
    marginLeft: 5,
    fontWeight: "bold",
    width: 150,
  },
  headerButton_noBorder: {
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
  headerButton: {
    borderWidth: 0.6,
    borderColor: "#FFF",
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
  headerImg: {
    height: 25,
    width: 25,
  },
  //css for search box
  searchBlock: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    padding: 5,
    alignItems: "center",
    marginRight: 25,
    marginLeft: 25,
    flexDirection: "row",
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  searchButton: {
    borderColor: "#FFF",
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
  searchText: {
    fontSize: 18,
    width: 190,
    fontFamily: "Roboto-Light",
  },
  //css for menu button
  menuBlock_column: {
    marginTop: 20,
    flex: 3,
    flexDirection: "column",
  },
  menuBlock_row: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  menu_Button_Left: {
    padding: 5,
    marginLeft: 5,
  },
  menu_Button_Right: {
    padding: 5,
  },
  menu_Img: {
    width: 140,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  menu_title: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    width: 130,
    textAlign: "center",
  },
  menu_content: {
    marginTop: 7,
    width: 100,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Roboto-Light",
  },
});
export default styles;
