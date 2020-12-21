import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useDocumentData } from "react-firebase-hooks/firestore";
import * as Location from "expo-location";

import { firestore } from "../firebase/firebase.utils";
import { selectRequestId, selectPoolId, selectIsOthers } from "../redux/request/request.selectors";
import { configureTask } from "../utils/background-task.services";

import MapDirection from "./map-direction.component";
import { deviceRevolution } from "./constant.unit";

const Map = ({ source, isSearching, children, destination, requestId, isControl, poolId }) => {
    const mapRef = useRef(null);
    const [region, setRegion] = useState({
        latitude: 10.16494,
        longitude: 106.61501,
        latitudeDelta: 0.0343,
        longitudeDelta: 0.0134
    });
    const driverPositionRef = firestore.collection("drivers").doc(`${poolId}`);
    const requestRef = firestore.collection("requests").doc(`${requestId}`);
    const [driverPosition] = useDocumentData(driverPositionRef);
    const [request] = useDocumentData(requestRef);
    const [ownPosition, setOwnPosition] = useState({
        latitude: 10.16494,
        longitude: 106.61501
    });
    const [driver, setDriver] = useState({
        latitude: 10.16494,
        longitude: 106.61501
    });

    useEffect(() => {
        if (driverPosition && driverPosition.latitude) {
            setDriver({ latitude: driverPosition.latitude, longitude: driverPosition.longitude });
        }
    }, [driverPosition]);

    const onRegionChange = region => {
        setRegion(region);
    };

    const handleLocationChange = coordinate => {
        setOwnPosition(coordinate);
    };

    return (
        <View
            style={[
                styles.container_mapview,
                isSearching ? { height: deviceRevolution.height } : { flex: 1 }
            ]}
        >
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                initialRegion={
                    isControl
                        ? region
                        : {
                              ...source.coordinates,
                              latitudeDelta: 0.0343,
                              longitudeDelta: 0.0134
                          }
                }
                onRegionChange={onRegionChange}
                showsMyLocationButton={true}
                showsUserLocation={true}
                loadingEnabled
                followsUserLocation={true}
                style={styles.map__view}
                onUserLocationChange={coordinate =>
                    handleLocationChange({
                        latitude: coordinate.nativeEvent.coordinate.latitude,
                        longitude: coordinate.nativeEvent.coordinate.longitude
                    })
                }
            >
                {destination && (
                    <>
                        <MapDirection
                            origin={
                                request && request.status === "picked"
                                    ? destination.coordinates
                                    : source.coordinates
                            }
                            destination={isControl ? driver : destination.coordinates}
                            onReady={results =>
                                mapRef.current.fitToCoordinates(results.coordinates, {
                                    edgePadding: {
                                        top: 20,
                                        bottom: 20,
                                        left: 50,
                                        right: 50
                                    }
                                })
                            }
                        />
                        <Marker
                            coordinate={isControl ? driver : destination.coordinates}
                            pinColor="red"
                            image={isControl ? "https://i.ibb.co/Qf8Xb5g/ambulance.png" : ""}
                        />
                        <Marker
                            coordinate={
                                request && request.status === "picked"
                                    ? destination.coordinates
                                    : source.coordinates
                            }
                            pinColor="red"
                        />
                    </>
                )}
            </MapView>
            {children}
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    requestId: selectRequestId,
    poolId: selectPoolId
});

export default connect(mapStateToProps)(Map);

const styles = StyleSheet.create({
    container_mapview: {
        marginTop: 10,
        alignItems: "center"
    },
    map__view: {
        width: "100%",
        height: "100%"
    },
    driverImage: {
        width: 25,
        height: 25,
        borderRadius: 15
    }
});
