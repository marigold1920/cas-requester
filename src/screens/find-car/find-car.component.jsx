import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import MapView from "react-native-maps";

import styles from "./find-car.styles";

import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import FindOwnAmbulanceTab from "../../components/find-car-tab.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import { deviceRevolution } from "../../components/constant.unit";

const FindCarScreen = ({ navigation }) => {
    const [isOthers, setIsOthers] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading ? navigation.navigate("RequestInfo") : null;
            setIsLoading(false);
        }, 3000);
    });

    return (
        <View style={styles.container}>
            <HeaderTileWithBackBtn
                textContent="Tìm xe"
                onPress={() => navigation.navigate("FindCar")}
                style={{ backgroundColor: "#fff" }}
            />
            <KeyboardAvoiding style={styles.content}>
                <View style={[styles.order__container]}>
                    <View style={[styles.container_mapview, isOthers ? { marginTop: 0 } : null]}>
                        <MapView
                            style={[
                                styles.map__view,
                                isLoading
                                    ? { height: deviceRevolution.height * 0.6 }
                                    : isOthers
                                    ? { height: deviceRevolution.height * 0.25, marginTop: 0 }
                                    : null,
                            ]}
                        />
                    </View>
                    {isLoading ? (
                        <View style={styles.loading}>
                            <Text style={styles.message}>Đang tìm tài xế phù hợp cho bạn...</Text>
                            <Image
                                source={{ uri: "https://i.ibb.co/G3KybLH/loading.png" }}
                                style={styles.loading__icon}
                            />
                            <Text style={styles.time__counter}>4:59</Text>
                            <Text onPress={() => setIsLoading(false)} style={styles.action}>
                                Hủy yêu cầu
                            </Text>
                        </View>
                    ) : (
                        <FindOwnAmbulanceTab
                            isOthers={isOthers}
                            setIsOthers={setIsOthers}
                            setIsLoading={setIsLoading}
                        />
                    )}
                </View>
            </KeyboardAvoiding>
        </View>
    );
};

export default FindCarScreen;
