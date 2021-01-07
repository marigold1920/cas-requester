import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { syncPoolData } from "../redux/request/request.actions";
import { selectConfig, selectRequestId } from "../redux/request/request.selectors";

import { firestore } from "../firebase/firebase.utils";

const FindingDriver = ({
    navigation,
    setIsLoading,
    drivers,
    requestId,
    config: { requestTimeout },
    syncPoolData,
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
            setMinutes(Math.floor(timer / 60));
            setSeconds(Math.floor(timer % 60));
            setTimer(timer - 1);
        }, 1000);

        return () => clearTimeout(interval);
    });

    useEffect(() => {
        if (!requestId) {
            setIsLoading(false);
        }
    }, [drivers, requestId]);

    useEffect(() => {
        if (request && request.status === "accepted") {
            syncPoolData(request.poolId);
            navigation.replace("RequestInfo");
        }
    }, [request]);

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
    requestId: selectRequestId,
    config: selectConfig
});

const mapDispatchToProps = dispatch => ({
    syncPoolData: poolId => dispatch(syncPoolData(poolId))
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
