import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Geocoder from "react-native-geocoding";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cancelRequest } from "../../redux/request/request.actions";
import { selectRequestId } from "../../redux/request/request.selectors";
import { selectStatusCode } from "../../redux/message/message.selectors";
import { selectToken } from "../../redux/user/user.selectors";
import { fetchConfig } from "../../redux/request/request.actions";
import { message } from "../../utils/message.data";

import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import FindAmbulanceTab from "../../components/find-ambulance-tab.component";
import Map from "../../components/map.component";
import FindingDriver from "../../components/finding-driver.component";
import GooglePlaceSearch from "../../components/google-place-search.component";
import ConfirmModal from "../../components/confirm-modal.component";
import MessageModal from "../../components/message-modal.component";
import Spinner from "../../components/spinner.component";

import styles from "./find-ambulance.styles";

Geocoder.init("AIzaSyA3wjgHRZGPb4I96XDM-Eev7f1QQM_Mpp8", { language: "vi" });

const FindAmbulanceScreen = ({
    token,
    requestId,
    statusCode,
    navigation,
    fetchConfig,
    cancelRequest
}) => {
    const [isFocus, setIsFocus] = useState(false);
    const [finding, setFinding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const [pickUp, setPickUp] = useState({
        latitude: 10.512362,
        longitude: 106.236236
    });
    const [destination, setDestination] = useState(null);
    const [placeType, setPlaceType] = useState(null);

    useEffect(() => {
        getCurrentLocation();
        fetchConfig(token);
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [statusCode]);

    useEffect(() => {
        if (requestId && !finding) {
            setFinding(true);
        }
    }, [requestId]);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(async position => {
            let { latitude, longitude } = position.coords;
            Geocoder.from(latitude, longitude).then(json =>
                setPickUp({
                    name: json.results[0].address_components[0].long_name,
                    address: json.results[0].formatted_address
                        .replace(", Việt Nam", "")
                        .replace("Thành phố", ""),
                    latitude,
                    longitude
                })
            );
        });
    };

    const handleCancelRequest = () => {
        setConfirm(false);
        cancelRequest(token, requestId);
        setFinding(false);
    };

    return (
        <View style={styles.container}>
            {loading && <Spinner />}
            {statusCode && (
                <MessageModal message={message[statusCode]} isMessage={statusCode < 400} />
            )}
            {confirm && (
                <ConfirmModal
                    onClose={() => setConfirm(false)}
                    onConfirm={handleCancelRequest}
                    message={message.cancelRequest}
                />
            )}
            <HeaderTileWithBackBtn
                textContent="Tìm xe"
                onPress={() => navigation.replace("Home")}
            />
            <View style={[styles.content, finding && { paddingBottom: "30%" }]}>
                {pickUp && (
                    <Map source={pickUp} destination={destination} isSearching={placeType}>
                        {placeType && (
                            <GooglePlaceSearch
                                setCurrent={getCurrentLocation}
                                onBackward={() => setPlaceType(null)}
                                setValue={placeType === "pickUp" ? setPickUp : setDestination}
                                setPlaceType={setPlaceType}
                                currentType={placeType}
                            />
                        )}
                    </Map>
                )}
                {finding ? (
                    <FindingDriver
                        pickUp={pickUp}
                        destination={destination}
                        navigation={navigation}
                        setConfirm={setConfirm}
                        handleCancelRequest={handleCancelRequest}
                        setFinding={setFinding}
                        setLoading={setLoading}
                    />
                ) : (
                    <FindAmbulanceTab
                        setLoading={setLoading}
                        setIsFocus={setIsFocus}
                        isFocus={isFocus}
                        pickUp={pickUp}
                        destination={destination}
                        setPlaceType={setPlaceType}
                    />
                )}
            </View>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken,
    requestId: selectRequestId,
    statusCode: selectStatusCode
});

const mapDispatchToProps = dispatch => ({
    cancelRequest: (token, requestId) => dispatch(cancelRequest(token, requestId)),
    fetchConfig: token => dispatch(fetchConfig(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(FindAmbulanceScreen);
