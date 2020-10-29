import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectToken } from "../../redux/user/user.selectors";
import api from "../../apis/api";

import DriverInfo from "../../components/driver-info.component";
import RequestHistoryInfo from "../../components/request-history-info.component";
import BackgroundImage from "../../components/background-screen.component";

import styles from "./request-details.styles";

const RequestDetails = ({ navigation, token }) => {
    const requestId = navigation.state.params.requestId;
    const [request, setRequest] = useState(null);

    useEffect(() => {
        api.get(`/requests/history/${requestId}`, {
            headers: {
                Authorization: token
            }
        }).then(response => setRequest(response.data));
    }, []);

    return (
        <BackgroundImage>
            <View style={styles.container}>
                {request ? (
                    <>
                        <DriverInfo driver={request.driver} licensePlate={request.licensePlate} />
                        <RequestHistoryInfo request={request} />
                    </>
                ) : null}
            </View>
        </BackgroundImage>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken
});

export default withNavigation(connect(mapStateToProps)(RequestDetails));
