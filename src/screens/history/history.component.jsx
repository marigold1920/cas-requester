import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchHistories } from "../../apis/core.api";
import { selectCurrentUser, selectToken } from "../../redux/user/user.selectors";

import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import HistoryComponent from "../../components/history-custom-row.component";
import Spinner from "../../components/spinner.component";

import styles from "./history.styles";

const HistoryScreen = ({ currentUser, token, navigation }) => {
    const [history, setHistory] = useState({ data: [], totalPage: 0, currentPage: 1 });
    const [currentHistory, setCurrentHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchHistory(1);
    }, []);

    const fetchHistory = pageIndex => {
        setLoading(true);
        fetchHistories(token, currentUser.id, pageIndex).then(response =>
            setTimeout(() => {
                setHistory(response.data);
                setCurrentHistory(currentHistory.concat(response.data.data));
                setLoading(false);
            }, 500)
        );
    };

    return (
        <View style={styles.container}>
            {loading && <Spinner />}
            <HeaderTileWithBackBtn textContent="Lịch sử" />
            <ScrollView
                style={{ width: "90%" }}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled={true}
            >
                {currentHistory.length
                    ? currentHistory.map(({ id, ...otherProps }) => (
                          <HistoryComponent
                              key={id}
                              requestId={id}
                              {...otherProps}
                              navigation={navigation}
                          />
                      ))
                    : null}
                {history.currentPage < history.totalPage && (
                    <TouchableOpacity
                        onPress={() => fetchHistory(Number.parseInt(history.currentPage) + 1)}
                    >
                        <Text style={styles.loadMore}>Xem thêm</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    token: selectToken
});

export default connect(mapStateToProps)(HistoryScreen);
