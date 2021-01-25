import React, { useEffect, useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { withNavigation } from "react-navigation";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useDocumentData } from "react-firebase-hooks/firestore";

import {
    selectCurrentRequest,
    selectDestination,
    selectPickUp,
    selectRequestId
} from "../../redux/request/request.selectors";
import { selectToken } from "../../redux/user/user.selectors";
import { clearRequest, fetchRequest, cancelRequest } from "../../redux/request/request.actions";
import { cancelRequestFirestore, firestore } from "../../firebase/firebase.utils";
import { message } from "../../utils/message.data";

import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import Location from "../../components/location.component";
import Rating from "../../components/rating.component";
import Map from "../../components/map.component";
import CancelRequestModal from "../../components/cancel-request-modal.component";
import ConfirmModal from "../../components/confirm-modal.component";

import styles from "./request-info.styles";

const RequestInfoScreen = ({
    navigation,
    currentRequest,
    fetchRequest,
    token,
    source,
    destination,
    requestId,
    clearRequest,
    cancelRequest
}) => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const requestDocumentRef = firestore.collection("requests").doc(`${requestId}`);
    const [request] = useDocumentData(requestDocumentRef);

    useEffect(() => {
        fetchRequest(token, currentRequest.requestId);
    }, []);

    useEffect(() => {
        if (request && request.status === "rejected") {
            setIsCancelled(true);
        }
    }, [request]);

    useEffect(() => {
        request && request.status === "finished" && navigation.navigate("Feedback");
    }, [request]);

    const handleConfirmCancelledRequest = () => {
        setIsCancelled(false);
        clearRequest();
        navigation.navigate("FindAmbulance");
    };

    const handleCancelRequest = () => {
        cancelRequestFirestore(requestId);
        cancelRequest(token, requestId);
        navigation.navigate("FindAmbulance");
    };

    return (
        <View
            style={{ width: "100%", height: "100%", position: "relative", backgroundColor: "#fff" }}
        >
            {confirm && (
                <ConfirmModal
                    message={message.cancelRequest}
                    onConfirm={handleCancelRequest}
                    onClose={() => setConfirm(false)}
                />
            )}
            <CancelRequestModal action={handleConfirmCancelledRequest} visible={isCancelled} />
            <View style={styles.container}>
                <HeaderTileWithBackBtn textContent="Thông tin tài xế" />
                <Map source={source} destination={destination} isControl={true} />
                {currentRequest.pickUp && (
                    <View style={styles.request__info}>
                        <View style={styles.driver__info}>
                            <Image
                                style={styles.driver__image}
                                source={{ uri: currentRequest.driver.imageUrl }}
                            />
                            <View style={styles.group}>
                                <Text style={styles.name}>{currentRequest.driver.driverName}</Text>
                                <Rating level={currentRequest.driver.ratingLevel} size={10} />
                                <Text style={styles.license__plate}>
                                    {currentRequest.ambulance.licensePlate}
                                </Text>
                                <View style={styles.contact}>
                                    <Text style={styles.driver__phone}>
                                        {currentRequest.driver.phone || "Đang cập nhật"}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.location}>
                            {request && request.status === "picked" ? (
                                <Location
                                    name={currentRequest.destination.name}
                                    value={currentRequest.destination.address}
                                    icon="https://i.ibb.co/gWdQ69d/radar.png"
                                />
                            ) : (
                                <Location
                                    name={currentRequest.pickUp.name}
                                    value={currentRequest.pickUp.address}
                                    icon="https://i.ibb.co/D8HPk12/placeholder.png"
                                />
                            )}
                        </View>
                        {!(request && request.status === "picked") && (
                            <View style={styles.group__action}>
                                <Text
                                    onPress={() => setConfirm(true)}
                                    style={[styles.action, styles.cancel]}
                                >
                                    Hủy yêu cầu
                                </Text>
                                <Text
                                    onPress={() =>
                                        Linking.openURL(
                                            `tel: ${currentRequest.driver.phone || "0931738872"}`
                                        )
                                    }
                                    style={styles.action}
                                >
                                    Liên hệ tài xế
                                </Text>
                            </View>
                        )}
                    </View>
                )}
            </View>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    currentRequest: selectCurrentRequest,
    token: selectToken,
    source: selectPickUp,
    destination: selectDestination,
    requestId: selectRequestId
});

const mapDispatchToProps = dispatch => ({
    fetchRequest: (token, requestId) => dispatch(fetchRequest(token, requestId)),
    clearRequest: () => dispatch(clearRequest()),
    cancelRequest: (token, requestId) => dispatch(cancelRequest(token, requestId))
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(RequestInfoScreen));
