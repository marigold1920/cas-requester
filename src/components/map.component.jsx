import React, { useRef, useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { firestore } from "../firebase/firebase.utils";
import { selectRequestId, selectPoolId } from "../redux/request/request.selectors";

import MapDirection from "./map-direction.component";
import { deviceRevolution } from "./constant.unit";

const Map = ({
    source,
    isSearching,
    children,
    destination,
    requestId,
    isControl,
    poolId,
    driverImage
}) => {
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
                              latitude: source.latitude,
                              longitude: source.longitude,
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
            >
                {destination && (
                    <>
                        <MapDirection
                            origin={request && request.status === "picked" ? destination : source}
                            destination={isControl ? driver : destination}
                            onReady={results =>
                                mapRef.current.fitToCoordinates(results.coordinates, {
                                    edgePadding: {
                                        top: 35,
                                        bottom: 50,
                                        left: 50,
                                        right: 50
                                    }
                                })
                            }
                        />
                        {!isControl ? (
                            <Marker
                                coordinate={isControl ? driver : destination}
                                pinColor="red"
                                image={require("../../assets/icons/end.png")}
                            />
                        ) : (
                            <Marker coordinate={driver}>
                                <View style={styles.customMarker}>
                                    {driverImage ? (
                                        <Image
                                            style={styles.driverImage}
                                            source={{ uri: driverImage }}
                                        />
                                    ) : null}
                                    <Image
                                        style={{
                                            position: "absolute",
                                            zIndex: -1,
                                            width: 30,
                                            height: 37
                                        }}
                                        source={require("../../assets/icons/end.png")}
                                    />
                                </View>
                            </Marker>
                        )}
                        <Marker
                            coordinate={
                                request && request.status === "picked" ? destination : source
                            }
                            pinColor="red"
                            image={require("../../assets/icons/start.png")}
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
        alignItems: "center"
    },
    map__view: {
        width: "100%",
        height: "100%"
    },
    driverImage: {
        width: 22,
        height: 22,
        borderRadius: 11,
        marginBottom: 10
    },
    customMarker: {
        width: 69,
        height: 75,
        alignItems: "center",
        justifyContent: "flex-end"
    }
});
