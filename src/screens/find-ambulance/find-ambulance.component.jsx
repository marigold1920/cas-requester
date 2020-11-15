import React, { useEffect, useState } from "react";
import { View } from "react-native";

import styles from "./find-ambulance.styles";

import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import FindAmbulanceTab from "../../components/find-ambulance-tab.component";
import BackgroundImage from "../../components/background-screen.component";
import Map from "../../components/map.component";
import FindingDriver from "../../components/finding-driver.component";
import GooglePlaceSearch from "../../components/google-place-search.component";

const FindAmbulanceScreen = ({ navigation }) => {
    const [isOthers, setIsOthers] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [pickUp, setPickUp] = useState(null);
    const [destination, setDestination] = useState(null);
    const [placeType, setPlaceType] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async position => {
            let { latitude, longitude } = position.coords;
            setPickUp({ address: "Vị trí hiện tại,", coordinates: { latitude, longitude } });
        });
    }, []);

    const handleViewRequest = () => {
        navigation.navigate("RequestInfo");
    };

    const handleFinish = () => {};

    return (
        <BackgroundImage>
            <HeaderTileWithBackBtn
                textContent="Tìm xe"
                onPress={() => navigation.navigate("Home")}
            />
            <View style={styles.content}>
                <View
                    style={[
                        styles.order__container,
                        isFocus && { flexDirection: "column-reverse" }
                    ]}
                >
                    {pickUp && (
                        <Map
                            source={pickUp}
                            destination={destination}
                            isSearching={placeType}
                            handleFinished={handleFinish}
                        >
                            {placeType && (
                                <GooglePlaceSearch
                                    onBackward={() => setPlaceType(null)}
                                    setValue={placeType === "pickUp" ? setPickUp : setDestination}
                                    setPlaceType={setPlaceType}
                                />
                            )}
                        </Map>
                    )}
                    {isLoading ? (
                        <FindingDriver
                            pickUp={pickUp}
                            destination={destination}
                            setIsLoading={setIsLoading}
                            handleViewRequest={handleViewRequest}
                            navigation={navigation}
                        />
                    ) : (
                        <FindAmbulanceTab
                            isOthers={isOthers}
                            setIsOthers={setIsOthers}
                            setIsLoading={setIsLoading}
                            setIsFocus={setIsFocus}
                            pickUp={pickUp}
                            destination={destination}
                            setPlaceType={setPlaceType}
                        />
                    )}
                </View>
            </View>
        </BackgroundImage>
    );
};

export default FindAmbulanceScreen;
