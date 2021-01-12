import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectToken } from "../../redux/user/user.selectors";
import { fetchRequestDetails } from "../../apis/core.api";

import DriverInfo from "../../components/driver-info.component";
import RequestHistoryInfo from "../../components/request-history-info.component";
import BackgroundImage from "../../components/background-screen.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";

import styles from "./request-details.styles";

const RequestDetails = ({ navigation, token }) => {
    const requestId = navigation.state.params.requestId;
    const [request, setRequest] = useState(null);

    useEffect(() => {
        fetchRequestDetails(token, requestId).then(response => setRequest(response.data));
    }, [token, requestId]);

    return (
        <BackgroundImage>
            <HeaderTileWithBackBtn
                textContent="Chi tiết"
                onPress={() => navigation.replace("History")}
            />
            <View style={styles.container}>
                {request && (
                    <>
                        <DriverInfo request={request} />
                        <RequestHistoryInfo request={request} />
                    </>
                )}
            </View>
        </BackgroundImage>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken
});

export default withNavigation(connect(mapStateToProps)(RequestDetails));
