import React from "react";
import { View, FlatList, StyleSheet, ImageBackground } from "react-native";
import CustomRowHistory from "../../components/history-custom-row.component";
import SearchBox from "../../components/searchbox-icon.component";

import styles from "./history-styles";

import DATA from "./data";
// import styles from "./history-styles";

const MockData = DATA;

const CustomListview = ({ itemList }) => (
  <View style={styles.customlist}>
    <FlatList
      showsVerticalScrollIndicator="false"
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

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/icons/background.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.container_search_box}>
          <SearchBox placeholder="Tìm kiếm địa điểm" />
        </View>
        <CustomListview itemList={MockData} />
      </ImageBackground>
    </View>
  );
};

export default HistoryScreen;
