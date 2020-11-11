import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { syncPoolData } from "../redux/request/request.actions";
import { selectDrivers } from "../redux/geofirestore/geofirestore.selectors";
import { selectRequestId } from "../redux/request/request.selectors";

import { createRequest, fillRequest, firestore } from "../firebase/firebase.utils";

const FindingDriver = ({
    navigation,
    setIsLoading,
    drivers,
    pickUp,
    destination,
    requestId,
    syncPoolData
}) => {
    const requestRef = firestore.collection("requests").doc(`${requestId}`);
    const [request] = useDocumentData(requestRef);

    useEffect(() => {
        if (requestId && drivers.length > 0) {
            fillRequest(drivers, requestId);
            createRequest(
                requestId,
                pickUp.coordinates.latitude,
                pickUp.coordinates.longitude,
                destination.coordinates.latitude,
                destination.coordinates.longitude
            );
        }
    }, [drivers, requestId]);

    useEffect(() => {
        if (request && request.status === "accepted") {
            syncPoolData(request.poolId);
            navigation.navigate("RequestInfo");
        }
    }, [request]);

    return (
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
    );
};

const mapStateToProps = createStructuredSelector({
    drivers: selectDrivers,
    requestId: selectRequestId
});

const mapDispatchToProps = dispatch => ({
    syncPoolData: poolId => dispatch(syncPoolData(poolId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FindingDriver);

const styles = StyleSheet.create({
    loading: {
        height: "35%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    message: {
        fontFamily: "Texgyreadventor-regular",
        color: "#444444",
        fontSize: 16
    },
    loading__icon: {
        width: 30,
        height: 30,
        marginVertical: 5
    },
    time__counter: {
        fontFamily: "Texgyreadventor-bold",
        color: "#444444",
        fontSize: 18
    },
    action: {
        backgroundColor: "#f30000",
        color: "#fff",
        fontSize: 16,
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        fontFamily: "Texgyreadventor-regular",
        elevation: 12
    }
});
