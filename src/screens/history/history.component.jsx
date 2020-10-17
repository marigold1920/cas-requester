import React from "react";
import { View, FlatList } from "react-native";
import CustomRowHistory from "../../components/history-custom-row.component";

import styles from "./history.styles";

import DATA from "./history.data";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";

const MockData = DATA;

const HistoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackgroundImage>
                <HeaderTileWithBackBtn textContent="Lịch sử" gotoScreen={() => navigation.navigate("Home")} />
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
            showsVerticalScrollIndicator={false}
            data={itemList}
            renderItem={({ item }) => (
                <CustomRowHistory title={item.title} address={item.address} image_url={item.image_url} />
            )}
        />
    </View>
);

export default HistoryScreen;
