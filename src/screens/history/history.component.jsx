import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchHistories } from "../../apis/core.api";
import { selectCurrentUser, selectToken } from "../../redux/user/user.selectors";

import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import CustomRowHistory from "../../components/history-custom-row.component";

import styles from "./history.styles";

const HistoryScreen = ({ navigation, currentUser, token, statusCode, updateStatusCode }) => {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        fetchHistories(token, currentUser.userId).then(res => setHistories(res.data));
    }, [token]);

    return (
        <View style={styles.container}>
            <BackgroundImage>
                <HeaderTileWithBackBtn
                    textContent="Lịch sử"
                    onPress={() => navigation.navigate("Home")}
                />
                <CustomListview itemList={histories} />
                <View style={styles.container_button}>
                    <ButtonText
                        textContent="Tìm xe"
                        styleButton={styles.button}
                        styleText={styles.button_text}
                        onPress={() => navigation.navigate("FindAmbulance")}
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
    currentUser: selectCurrentUser,
    token: selectToken
});

export default connect(mapStateToProps)(HistoryScreen);
