import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Place from "../../components/place.component";

import styles from "./request-details.styles";

const pickUp = {
  name: "Vị trí của bạn",
  address: "1141/15/7, Lê Công, Gò Vấp",
  date: "20/07/2020",
  time: "10:20",
};

const destination = {
  name: "Bệnh viện Quân Y",
  address: "365 Lê Văn Việt, Q.9, Tp. HCM",
  date: "20/07/2020",
  time: "12:20",
};

const RequestDetails = () => (
  <View style={styles.container}>
    <View style={styles.driverInfo}>
      <Image
        style={styles.background}
        source={require("../../../assets/images/request-details-bg.png")}
      />
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/person-3.jpg")}
        />
        <Text style={styles.name}>Victor Nguyen</Text>
        <Text style={styles.role}>Tài xế</Text>
        <Text style={styles.licensePlate}>71 - C1 852.23</Text>
      </View>
      <Text style={styles.status}>Thành công</Text>
    </View>
    <ScrollView style={styles.details}>
      <Place place={pickUp} />
      <Place place={destination} />
      <Text style={styles.note}>Lưu ý</Text>
    </ScrollView>
    <Text style={styles.action}>Đánh giá dịch vụ</Text>
  </View>
);

export default RequestDetails;
