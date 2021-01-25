import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchHistories } from "../../apis/core.api";
import { selectCurrentUser, selectToken } from "../../redux/user/user.selectors";

import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import HistoryComponent from "../../components/history-custom-row.component";
import Spinner from "../../components/spinner.component";

import styles from "./history.styles";

const HistoryScreen = ({ currentUser, token }) => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHistories(token, currentUser.id).then(response =>
            setTimeout(() => {
                setHistory(response.data);
                setLoading(false);
            }, 500)
        );
    }, []);

    return (
        <View style={styles.container}>
            {loading && <Spinner />}
            <HeaderTileWithBackBtn textContent="Lịch sử" />
            <ScrollView
                style={{ width: "90%" }}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled={true}
            >
                {history.length
                    ? history.map(({ id, ...otherProps }) => (
                          <HistoryComponent key={id} {...otherProps} />
                      ))
                    : null}
            </ScrollView>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    token: selectToken
});

export default connect(mapStateToProps)(HistoryScreen);
