import React from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from "react-native-vector-icons/MaterialIcons";

const GooglePlaceSearch = ({ setValue, setPlaceType, onBackward, currentType }) => (
    <View style={styles.main__container}>
        <View style={styles.wrraper}>
            <GooglePlacesAutocomplete
                styles={placeStyles}
                placeholder={`Chọn vị trí ${currentType === "pickUp" ? "đón" : "đến"}`}
                onPress={(data, details) => {
                    setValue({
                        name: data.structured_formatting.main_text,
                        address: data.structured_formatting.secondary_text
                            .replace(", Việt Nam", "")
                            .replace("Thành phố", ""),
                        latitude: details.geometry.location.lat || null,
                        longitude: details.geometry.location.lng || null
                    });
                }}
                autoFillOnNotFound={true}
                onFail={error => console.log(error)}
                query={{
                    key: "AIzaSyA3wjgHRZGPb4I96XDM-Eev7f1QQM_Mpp8",
                    language: "vi",
                    components: "country:vn"
                }}
                textInputProps={{
                    autoCapitalize: "none",
                    autoCorrect: false,
                    onBlur: () => setPlaceType(null)
                }}
                fetchDetails
                enablePoweredByContainer={false}
            />
        </View>
        <Icon
            onPress={onBackward}
            style={styles.wrapper__icon}
            size={20}
            color="#222"
            name="keyboard-backspace"
        />
    </View>
);

export default GooglePlaceSearch;

const styles = StyleSheet.create({
    main__container: {
        width: "85%",
        position: "absolute",
        top: 5,
        zIndex: 2,
        justifyContent: "center"
    },
    wrraper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    wrapper__icon: {
        position: "absolute",
        marginLeft: 10,
        left: 0,
        top: 12
    },
    currentLocation: {
        position: "absolute",
        right: 5,
        top: 12
    }
});

const placeStyles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textInputContainer: {
        backgroundColor: "transparent"
    },
    textInput: {
        fontSize: 14,
        color: "#444",
        fontFamily: "Texgyreadventor-regular",
        paddingLeft: 40,
        paddingVertical: 5
    },
    listView: {
        borderWidth: 0.5,
        borderColor: "#ddd",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        color: "#000",
        fontFamily: "Texgyreadventor-regular"
    },
    row: {
        color: "#000"
    },
    description: {
        color: "#000",
        fontFamily: "Texgyreadventor-regular"
    }
});
