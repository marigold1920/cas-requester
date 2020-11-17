import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { withNavigation } from "react-navigation";
import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { findNearestDrivers } from "../redux/geofirestore/geofirestore.actions";
import { saveRequest } from "../redux/request/request.actions";
import { selectToken, selectUsername } from "../redux/user/user.selectors";

import BookingHeaderItem from "./booking-header-item.component";
import FormInput from "./form-input.component";
import CustomOption from "./option.component";
import KeyboardAvoiding from "./keyboard-avoiding.component";

const FindAmbulanceTab = ({
    isOthers,
    setIsOthers,
    setIsLoading,
    setPlaceType,
    setIsFocus,
    pickUp,
    destination,
    token,
    username,
    saveRequest,
    findNearestDrivers
}) => {
    const [patientName, setPatientName] = useState("Victor");
    const [patientPhone, setPatientPhone] = useState("0988635032");
    const [note, setNote] = useState("Cần dụng cụ sơ cứu tại chỗ");
    const [requestType, setRequestType] = useState("emergency");
    const [morbidity, setMorbidity] = useState("Tai nạn giao thông");

    const handleAction = async () => {
        findNearestDrivers(pickUp.coordinates.latitude, pickUp.coordinates.longitude);
        saveRequest(
            token,
            {
                username,
                pickUp: {
                    name: pickUp.name,
                    address: pickUp.address
                },
                destination: {
                    name: destination.name,
                    address: destination.address
                },
                patientName,
                patientPhone,
                morbidity,
                note
            },
            pickUp,
            destination
        );
        setIsLoading(true);
    };

    const statusItems = [
        {
            value: "Tai nạn giao thông",
            label: "Tai nạn giao thông"
        },
        {
            value: "Tai nạn lao động",
            label: "Tai nạn lao động"
        },
        {
            value: "Tình trạng nguy kịch",
            label: "Tình trạng nguy kịch"
        },
        {
            value: "Đi sanh",
            label: "Đi sanh"
        }
    ];

    const options = [
        {
            itemId: 1,
            value: "emergency",
            label: "Cấp cứu"
        },
        {
            itemId: 2,
            value: "home",
            label: "Đi về nhà"
        }
    ];

    return (
        <View style={styles.booking}>
            <View style={styles.booking__header}>
                <BookingHeaderItem
                    onPress={() => setIsOthers(false)}
                    isActive={isOthers ? false : true}
                    content="Tìm xe cho bạn"
                />
                <BookingHeaderItem
                    onPress={() => setIsOthers(true)}
                    isActive={isOthers}
                    content="Tìm xe cho người khác"
                />
            </View>
            <KeyboardAvoiding style={styles.places}>
                <View style={styles.requestType}>
                    <RadioButton.Group
                        value={requestType}
                        onValueChange={value => setRequestType(value)}
                    >
                        {options.map(({ itemId, ...otherProps }) => (
                            <CustomOption key={itemId} {...otherProps} />
                        ))}
                    </RadioButton.Group>
                </View>
                <FormInput
                    onFocus={() => setPlaceType("pickUp")}
                    placeholder="Điểm đón"
                    defaultValue={pickUp && pickUp.name}
                    icon="https://i.ibb.co/D8HPk12/placeholder.png"
                />
                {requestType === "emergency" && (
                    <DropDownPicker
                        placeholder="Tình trạng cấp cứu"
                        placeholderStyle={{ color: "#999", fontSize: 14 }}
                        containerStyle={{ height: 45 }}
                        style={styles.dropdown__style}
                        labelStyle={styles.dropdown__lable__style}
                        items={statusItems}
                        defaultValue={morbidity}
                        onChangeItem={item => setMorbidity(item.value)}
                    />
                )}
                <FormInput
                    onFocus={() => setPlaceType("destination")}
                    placeholder="Điểm cần đến"
                    defaultValue={destination && destination.name}
                    icon="https://i.ibb.co/gWdQ69d/radar.png"
                />
                {isOthers && (
                    <>
                        <FormInput
                            placeholder="Tên"
                            defaultValue={patientName}
                            onChangeText={value => setPatientName(value)}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            icon="https://i.ibb.co/9cR5tcy/name.png"
                        />
                        <FormInput
                            placeholder="Số điện thoại"
                            defaultValue={patientPhone}
                            onChangeText={value => setPatientPhone(value)}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => {
                                setIsFocus(false);
                            }}
                            keyboardType="numeric"
                            icon="https://i.ibb.co/cctFq5g/phone-call.png"
                        />
                    </>
                )}
                <FormInput
                    style={styles.note}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    placeholder="Ghi chú"
                    numberOfLines={2}
                    defaultValue={note}
                    onChangeText={value => setNote(value)}
                />
            </KeyboardAvoiding>
            <Text onPress={handleAction} style={styles.action}>
                Tìm xe
            </Text>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken,
    username: selectUsername
});

const mapDispatchToProps = dispatch => ({
    findNearestDrivers: (latitude, longitude) =>
        dispatch(findNearestDrivers({ latitude, longitude })),
    saveRequest: (token, request, pickUp, destination) =>
        dispatch(saveRequest(token, request, pickUp, destination))
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(FindAmbulanceTab));

const styles = StyleSheet.create({
    booking: {
        position: "relative",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10
    },
    booking__header: {
        width: "85%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    places: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        zIndex: 5
    },
    requestType: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    action: {
        backgroundColor: "#FF8A00",
        color: "#fff",
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 30,
        marginVertical: 10,
        borderRadius: 25,
        fontFamily: "Texgyreadventor-regular"
    },
    note: {
        width: "100%",
        borderWidth: 0.1,
        borderColor: "#444444",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginTop: 5,
        fontFamily: "Texgyreadventor-regular",
        fontSize: 14,
        backgroundColor: "#fff",
        zIndex: -1
    },
    dropdown__style: {
        backgroundColor: "#fff",
        borderColor: "#444",
        borderWidth: 0.1,
        marginVertical: 2
    },
    dropdown__lable__style: {
        fontSize: 14,
        fontFamily: "Texgyreadventor-regular",
        color: "#444"
    }
});
