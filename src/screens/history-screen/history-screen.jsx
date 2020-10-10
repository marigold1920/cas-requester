import React from "react";
import { View, FlatList } from "react-native";
import CustomRowHistory from "../../components/history-custom-row.component";
import SearchBox from "../../components/searchbox-icon.component";

import styles from "./history-styles";

import DATA from "./data";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";

const MockData = DATA;

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.container_search_box}>
          <SearchBox placeholder="Tìm kiếm địa điểm" />
        </View>
        <CustomListview itemList={MockData} />
        <View style={styles.container_button}>
          <ButtonText
            textContent="Tìm xe"
            styleButton={styles.button}
            styleText={styles.button_text}
            gotoScreen={() => navigation.navigate("FindCar")}
          />
        </View>
      </BackgroundImage>
    </View>
  );
};

const CustomListview = ({ itemList }) => (
  <View style={styles.customlist}>
    <FlatList
      data={itemList}
      renderItem={({ item }) => (
        <CustomRowHistory
          title={item.title}
          address={item.address}
          image_url={item.image_url}
        />
      )}
    />
  </View>
);

export default HistoryScreen;
