import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import MapView from "react-native-maps";

import styles from "./find-car.styles";

import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import FindOwnAmbulanceTab from "../../components/find-car-tab.component";
import { deviceRevolution } from "../../components/constant.unit";

const FindCarScreen = ({ navigation }) => {
    const [isReverse, setIsReverse] = useState(false);
    const [isOthers, setIsOthers] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>
            <HeaderTileWithBackBtn textContent="Tìm xe" gotoScreen={() => navigation.navigate("FindCar")} />
            <View style={[styles.order__container, isReverse ? styles.reverse__order : null]}>
                <View style={[styles.container_mapview, isOthers ? { marginTop: 0 } : null]}>
                    <MapView
                        style={[
                            styles.map__view,
                            isLoading
                                ? { height: deviceRevolution.height * 0.6 }
                                : isOthers
                                ? { height: deviceRevolution.height * 0.3, marginTop: 0 }
                                : null
                        ]}
                    />
                </View>
                {isLoading ? (
                    <View style={styles.loading}>
                        <Text style={styles.message}>Đang tìm tài xế phù hợp cho bạn...</Text>
                        <Image source={{ uri: "https://i.ibb.co/G3KybLH/loading.png" }} style={styles.loading__icon} />
                        <Text style={styles.time__counter}>4:59</Text>
                        <Text onPress={() => setIsLoading(false)} style={styles.action}>
                            Hủy yêu cầu
                        </Text>
                    </View>
                ) : (
                    <FindOwnAmbulanceTab
                        setIsReverse={setIsReverse}
                        isOthers={isOthers}
                        setIsOthers={setIsOthers}
                        setIsLoading={setIsLoading}
                    />
                )}
            </View>
        </View>
    );
};

export default FindCarScreen;
