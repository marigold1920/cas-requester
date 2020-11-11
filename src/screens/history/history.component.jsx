import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import api from "../../apis/api";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import CustomRowHistory from "../../components/history-custom-row.component";

import styles from "./history.styles";

const HistoryScreen = ({ navigation, currentUser }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        api.get(`/requests/history/${currentUser.userId}?pageIndex=0`, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        }).then(response => setHistory(response.data));
    }, []);

    return (
        <View style={styles.container}>
            <BackgroundImage>
                <HeaderTileWithBackBtn
                    textContent="Lịch sử"
                    onPress={() => navigation.navigate("Home")}
                />
                <CustomListview itemList={history} />
                <View style={styles.container_button}>
                    <ButtonText
                        textContent="Tìm xe"
                        styleButton={styles.button}
                        styleText={styles.button_text}
                        onPress={() => navigation.navigate("FindCar")}
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
            keyExtractor={item => item.requestId}
            renderItem={({ item }) => <CustomRowHistory key={item.requestId} item={item} />}
        />
    </View>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(HistoryScreen);
