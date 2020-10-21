import React, { useEffect } from "react";
import { View, Image, Text, Linking } from "react-native";
import { withNavigation } from "react-navigation";

import styles from "./request-info.styles";
import MapView from "react-native-maps";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import Location from "../../components/location.component";

const TripInfoScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Feedback");
        }, 15000);
    });

    return (
        <View style={styles.container}>
            <HeaderTileWithBackBtn textContent="Thông tin tài xế" />
            <MapView style={styles.map} />
            <View style={styles.request__info}>
                <View style={styles.driver__info}>
                    <Image style={styles.driver__image} source={{ uri: "https://i.ibb.co/3YCfN9p/person-3.jpg" }} />
                    <View style={styles.group}>
                        <Text style={styles.name}>Vương Đình Thái</Text>
                        <View style={styles.rating}>
                            <Image style={styles.star} source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }} />
                            <Image style={styles.star} source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }} />
                            <Image style={styles.star} source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }} />
                            <Image style={styles.star} source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }} />
                            <Image style={styles.star} source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }} />
                        </View>
                        <Text style={styles.license__plate}>71 - B1 836.56</Text>
                        <View style={styles.contact}>
                            <Text style={styles.driver__phone}>0931738872</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.location}>
                    <Location
                        name="Vị trí của bạn"
                        value="1141/15/7, Nguyễn Ảnh Thủ, Q.12"
                        icon="https://i.ibb.co/D8HPk12/placeholder.png"
                    />
                    <Location
                        name="Bệnh viện Quân Y"
                        value="365 Lê Văn Việt, Q.9, Tp. HCM"
                        icon="https://i.ibb.co/gWdQ69d/radar.png"
                    />
                </View>
                <View style={styles.group__action}>
                    <Text onPress={() => navigation.navigate("FindCar")} style={[styles.action, styles.cancel]}>
                        Hủy yêu cầu
                    </Text>
                    <Text onPress={() => Linking.openURL("tel: 0931738872")} style={styles.action}>
                        Liên hệ tài xế
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default withNavigation(TripInfoScreen);
