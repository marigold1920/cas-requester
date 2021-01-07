import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from "react-native-vector-icons/MaterialIcons";

const GooglePlaceSearch = ({ setValue, setPlaceType, onBackward }) => (
    <View style={styles.main__container}>
        <View style={styles.wrraper}>
            <Icon
                onPress={onBackward}
                style={styles.wrapper__icon}
                size={20}
                color="#666"
                name="keyboard-backspace"
            />
            <GooglePlacesAutocomplete
                styles={placeStyles}
                placeholder="Tìm kiếm địa điểm?"
                onPress={(data, details) => {
                    setValue({
                        name: data.structured_formatting.main_text,
                        address: data.structured_formatting.secondary_text
                            .replace(", Việt Nam", "")
                            .replace("Thành phố", ""),
                        coordinates: {
                            latitude: details.geometry.location.lat || null,
                            longitude: details.geometry.location.lng || null
                        }
                    });
                }}
                autoFillOnNotFound={true}
                onFail={error => console.log(error)}
                query={{
                    key: "AIzaSyA3wjgHRZGPb4I96XDM-Eev7f1QQM_Mpp8",
                    language: "vi"
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
    </View>
);

export default GooglePlaceSearch;

const styles = StyleSheet.create({
    main__container: {
        width: "90%",
        position: "absolute",
        top: 10
    },
    wrraper: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    wrapper__icon: {
        position: "absolute",
        zIndex: 1,
        marginLeft: 10
    }
});

const placeStyles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
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
