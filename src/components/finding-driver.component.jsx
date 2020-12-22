import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { syncPoolData } from "../redux/request/request.actions";
import { findNearestDrivers } from "../redux/geofirestore/geofirestore.actions";
import {
    selectDrivers,
    selectPreList,
    selectPreRadius,
    selectPreSize
} from "../redux/geofirestore/geofirestore.selectors";
import { selectConfig, selectPickUp, selectRequestId } from "../redux/request/request.selectors";

import { fillRequest, firestore } from "../firebase/firebase.utils";

const FindingDriver = ({
    navigation,
    setIsLoading,
    drivers,
    requestId,
    config: { requestTimeout, confirmationTimeout, numOfDrivers, extraRadius },
    preSize,
    preRadius,
    preList,
    pickUp,
    syncPoolData,
    findNearestDrivers,
    setConfirm,
    handleCancelRequest
}) => {
    const [timer, setTimer] = useState(requestTimeout * 60 - 1);
    const [minutes, setMinutes] = useState(requestTimeout - 1);
    const [seconds, setSeconds] = useState(59);
    const requestRef = firestore.collection("requests").doc(`${requestId}`);
    const [request] = useDocumentData(requestRef);

    useEffect(() => {
        if (!timer) {
            handleCancelRequest();
            return;
        }

        const interval = setTimeout(() => {
            if (!((requestTimeout * 60 - timer) % (confirmationTimeout * 60))) {
                handleRefindDrivers();
            }
            setMinutes(Math.floor(timer / 60));
            setSeconds(Math.floor(timer % 60));
            setTimer(timer - 1);
        }, 1000);

        return () => clearTimeout(interval);
    });

    useEffect(() => {
        if (requestId && drivers.length > 0) {
            fillRequest(drivers, preList, (request && request.blacklist) || [], requestId);
        }
        if (!requestId) {
            setIsLoading(false);
        }
    }, [drivers, requestId]);

    useEffect(() => {
        if (request && request.status === "accepted") {
            syncPoolData(request.poolId);
            navigation.navigate("RequestInfo");
        }
    }, [request]);

    const handleRefindDrivers = () => {
        const { blacklist } = request;
        fillRequest(drivers, [], [], 0);
        let boundary = preSize + numOfDrivers + ((blacklist && blacklist.length) || 0);
        findNearestDrivers(
            pickUp.coordinates.latitude,
            pickUp.coordinates.longitude,
            preRadius,
            boundary,
            extraRadius
        );
    };

    return (
        <View style={styles.loading}>
            <Text style={styles.message}>Đang tìm tài xế phù hợp cho bạn</Text>
            <Image
                source={{ uri: "https://i.ibb.co/ZmKX8PR/loading.gif" }}
                style={styles.loading__icon}
            />
            <Text onPress={() => setConfirm(true)} style={styles.action}>
                Hủy {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
            </Text>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    drivers: selectDrivers,
    requestId: selectRequestId,
    config: selectConfig,
    preSize: selectPreSize,
    preRadius: selectPreRadius,
    pickUp: selectPickUp,
    preList: selectPreList
});

const mapDispatchToProps = dispatch => ({
    syncPoolData: poolId => dispatch(syncPoolData(poolId)),
    findNearestDrivers: (latitude, longitude, radius, numOfDrivers, extraRadius) =>
        dispatch(findNearestDrivers(latitude, longitude, radius, numOfDrivers, extraRadius))
});

export default connect(mapStateToProps, mapDispatchToProps)(FindingDriver);

const styles = StyleSheet.create({
    loading: {
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    message: {
        fontFamily: "Texgyreadventor-regular",
        color: "#444444",
        fontSize: 16
    },
    loading__icon: {
        width: 40,
        height: 40,
        marginTop: 5
    },
    time__counter: {
        fontFamily: "Texgyreadventor-bold",
        color: "#444444",
        fontSize: 18
    },
    action: {
        backgroundColor: "#ff0000",
        color: "#fff",
        fontSize: 16,
        marginTop: 15,
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 25,
        fontFamily: "Texgyreadventor-bold",
        elevation: 10
    }
});
