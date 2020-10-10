import React from "react";
import { View, Image, TextInput, Dimensions } from "react-native";
import MapView from "react-native-maps";

import styles from "./find-car-styles";

import ButtonWithImage from "../../components/button-image.component";

import rem from "../../components/constant.unit";
import ButtonText from "../../components/button-text.component";
const FindCarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_location_picking}>
        <View style={styles.back_arrow}>
          <ButtonWithImage
            imgSrc={require("../../../assets/icons/back-arrow.png")}
            styleImg={{ width: 21, height: 21 }}
            gotoScreen={() => navigation.navigate("Home")}
          />
        </View>
        <View style={styles.block_icons_from_to}>
          <Image
            source={require("../../../assets/icons/pickup-location.png")}
            style={styles.icon_from_to}
          />
          <Image
            source={require("../../../assets/icons/vertical-dot.png")}
            style={styles.icon_from_to}
          />
          <Image
            source={require("../../../assets/icons/target-location.png")}
            style={styles.icon_from_to}
          />
        </View>
        <View style={styles.block_address}>
          <View style={styles.address}>
            <TextInput
              placeholder="Địa chỉ hiện tại"
              style={{ fontSize: 20 }}
            />
          </View>
          <View style={styles.address}>
            <TextInput
              placeholder="Điểm đến của bạn"
              style={{ fontSize: 20 }}
            />
          </View>
        </View>
        <View style={styles.block_reverse}>
          <ButtonWithImage
            buttonStyle={styles.button_reverse}
            imgSrc={require("../../../assets/icons/reverse-location.png")}
            styleImg={styles.img_reverse}
          />
        </View>
      </View>
      <View style={styles.container_mapview}>
        <MapView style={styles.map_view} />
      </View>
      <View style={styles.container_car_finding}>
        <View style={styles.img_background}>
          <Image
            source={require("../../../assets/icons/ambulance-icon.png")}
            style={styles.car_icon}
          />
        </View>
        <View style={styles.block_button}>
          <ButtonText
            textContent="Tìm tài xế"
            styleText={styles.text}
            styleButton={styles.button}
            gotoScreen={() => navigation.navigate("TripInfo")}
          />
        </View>
      </View>
    </View>
  );
};
export default FindCarScreen;
