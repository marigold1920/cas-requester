import React, { useEffect } from "react";
import { View, Text, Animated, TouchableOpacity, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Icon from "react-native-vector-icons/FontAwesome5";
import getDistance from "geolib/es/getDistance";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { syncPoolData, rejectedRequest } from "../redux/request/request.actions";
import {
    selectConfig,
    selectRequestId,
    selectPickUp,
    selectDestination
} from "../redux/request/request.selectors";
import { selectToken } from "../redux/user/user.selectors";

import { firestore } from "../firebase/firebase.utils";

const FindingDriver = ({
    navigation,
    requestId,
    config,
    pickUp,
    destination,
    token,
    syncPoolData,
    setConfirm,
    rejectedRequest,
    setFinding,
    setLoading
}) => {
    const requestRef = firestore.collection("requests").doc(`${requestId}`);
    const [request] = useDocumentData(requestRef);

    useEffect(() => {
        if (request && request.status === "accepted") {
            setFinding(false);
            syncPoolData(request.poolId);
            navigation.replace("Request");
        }
    }, [request]);

    const children = remainingTime => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <View style={styles.loading}>
            {pickUp && (
                <View style={styles.locationOverview}>
                    <View style={styles.iconContainer}>
                        <Icon size={18} color="#09acfe" name="chevron-circle-up" />
                        <Icon size={12} color="#555" name="ellipsis-v" />
                        <Text style={styles.requestDistanceValue}>
                            {(
                                getDistance(
                                    { latitude: pickUp.latitude, longitude: pickUp.longitude },
                                    {
                                        latitude: destination.latitude,
                                        longitude: destination.longitude
                                    }
                                ) / 1000
                            ).toFixed(1)}
                            km
                        </Text>
                        <Icon size={12} color="#555" name="ellipsis-v" />
                        <Icon size={18} color="#f9650c" name="chevron-circle-down" />
                    </View>
                    <View>
                        <View style={[styles.location, { marginBottom: 10 }]}>
                            <Text style={styles.name}>{pickUp.name}</Text>
                            <Text style={styles.address}>{pickUp.address}</Text>
                        </View>
                        <View style={styles.location}>
                            <Text style={styles.name}>{destination.name}</Text>
                            <Text style={styles.address}>{destination.address}</Text>
                        </View>
                    </View>
                </View>
            )}
            <View style={styles.loadingInner}>
                <TouchableOpacity style={styles.actionContainer} onPress={() => setConfirm(true)}>
                    <Text style={styles.action}>Hủy yêu cầu</Text>
                    <CountdownCircleTimer
                        isPlaying
                        duration={config.requestTimeout * 60}
                        initialRemainingTime={config.requestTimeout * 60 - 2}
                        onComplete={() => {
                            setFinding(false);
                            setLoading(true);
                            rejectedRequest(token, requestId);
                            setTimeout(() => {
                                setLoading(false);
                            }, 750);
                        }}
                        strokeWidth={0}
                        size={45}
                        colors="#09acfe"
                    >
                        {({ remainingTime }) => (
                            <Animated.Text style={styles.timeout}>
                                {children(remainingTime)}
                            </Animated.Text>
                        )}
                    </CountdownCircleTimer>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    requestId: selectRequestId,
    config: selectConfig,
    pickUp: selectPickUp,
    destination: selectDestination,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    syncPoolData: poolId => dispatch(syncPoolData(poolId)),
    rejectedRequest: (token, requestId) => dispatch(rejectedRequest(token, requestId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FindingDriver);

const styles = StyleSheet.create({
    loading: {
        position: "absolute",
        width: "100%",
        bottom: 50,
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    locationOverview: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingTop: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    iconContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10
    },
    location: {
        width: "85%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    name: {
        color: "#26324a",
        fontFamily: "Texgyreadventor-bold"
    },
    address: {
        fontSize: 10,
        color: "#6c7fa6",
        marginBottom: 5,
        fontFamily: "Texgyreadventor-bold"
    },
    requestDistanceValue: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 10,
        lineHeight: 14,
        color: "#6c7fa6"
    },
    timeout: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 15,
        color: "#09acfe"
    },
    actionContainer: {
        flexDirection: "row",
        borderRadius: 25,
        paddingHorizontal: 35,
        backgroundColor: "#f5f5f5"
    },
    action: {
        color: "#222",
        fontSize: 13,
        marginRight: 10,
        fontFamily: "Texgyreadventor-bold",
        alignSelf: "center"
    },
    loadingInner: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10
    }
});
