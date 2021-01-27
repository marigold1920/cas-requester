import React, { useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { saveRequest, fetchConfig } from "../redux/request/request.actions";
import { selectProfile, selectToken, selectUserId } from "../redux/user/user.selectors";
import { updateStatusCode } from "../redux/message/message.action";

import BookingHeaderItem from "./booking-header-item.component";
import FormInput from "./form-input.component";
import CustomOption from "./option.component";

const FindAmbulanceTab = ({
    setPlaceType,
    setIsFocus,
    pickUp,
    destination,
    token,
    userId,
    profile,
    saveRequest,
    updateStatusCode,
    setLoading,
    fetchConfig,
    isFocus
}) => {
    const [patientName, setPatientName] = useState(null);
    const [patientPhone, setPatientPhone] = useState(null);
    const [morbidityNote, setMorbidityNote] = useState(null);
    const [requestType, setRequestType] = useState("emergency");
    const [morbidity, setMorbidity] = useState(null);
    const [isOther, setIsOther] = useState(false);

    const handleAction = async () => {
        if (!(pickUp && destination)) {
            updateStatusCode(404);
            return;
        }
        fetchConfig(token);
        setTimeout(() => {
            const current = new Date();
            setLoading(true);
            saveRequest(
                token,
                userId,
                {
                    pickUp,
                    destination,
                    patientName,
                    patientPhone,
                    morbidity,
                    morbidityNote,
                    isEmergency: requestType === "emergency",
                    isOther,
                    healthInformation:
                        !isOther && requestType === "emergency" ? parseProfileToString() : null,
                    region: pickUp.address.substring(pickUp.address.lastIndexOf(", ") + 1).trim(),
                    createdDate: current.toISOString(),
                    createdTime: current.toLocaleTimeString("vi-VN")
                },
                pickUp,
                destination
            );
        }, 1000);
    };

    const parseProfileToString = () => {
        if (!profile) return null;

        let result = "";
        result += profile.gender && `Giới tính: ${profile.gender}`;
        result += profile.age && `, tuổi: ${profile.age}`;
        result += profile.bloodPressure && `, huyết áp: ${profile.bloodPressure}.`;
        result += profile.morbidity && ` Tình trạng hiện nay: ${profile.morbidity}`;
        result += profile.medicalHistories && `, Tiền sử bệnh: ${profile.medicalHistories}.`;
        result += profile.allergy && ` Dị ứng: ${profile.allergy}.`;
        result += profile.others && ` ${profile.others}`;

        return result;
    };

    const options = [
        {
            itemId: 1,
            value: "emergency",
            label: "Đến bệnh viện"
        },
        {
            itemId: 2,
            value: "home",
            label: "Đi về nhà"
        }
    ];

    return (
        <View style={[styles.booking, isFocus ? { top: 5 } : { bottom: 65 }]}>
            <View style={styles.booking__header}>
                <BookingHeaderItem
                    onPress={() => setIsOther(false)}
                    isActive={isOther ? false : true}
                    content="Tìm xe cho bạn"
                />
                <BookingHeaderItem
                    onPress={() => setIsOther(true)}
                    isActive={isOther}
                    content="Tìm xe cho người khác"
                />
            </View>
            <KeyboardAvoidingView style={styles.places}>
                <View style={styles.requestType}>
                    <RadioButton.Group
                        value={requestType}
                        onValueChange={value => {
                            setRequestType(value);
                            value === "home" && setMorbidity(null);
                        }}
                    >
                        {options.map(({ itemId, ...otherProps }) => (
                            <CustomOption key={itemId} {...otherProps} />
                        ))}
                    </RadioButton.Group>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ height: "65%" }}>
                    <FormInput
                        onFocus={() => setPlaceType("destination")}
                        placeholder="Điểm cần đến"
                        defaultValue={destination && destination.name}
                        icon="https://i.ibb.co/gWdQ69d/radar.png"
                    />
                    <FormInput
                        onFocus={() => setPlaceType("pickUp")}
                        placeholder="Điểm đón"
                        defaultValue={pickUp && pickUp.name}
                        icon="https://i.ibb.co/D8HPk12/placeholder.png"
                    />
                    {requestType === "emergency" && (
                        <FormInput
                            onChangeText={value => setMorbidity(value)}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            placeholder="Tình trạng cấp cứu"
                            defaultValue={morbidity}
                            icon="https://i.ibb.co/C74rF5B/first-aid-kit.png"
                        />
                    )}
                    {isOther && (
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
                        defaultValue={morbidityNote}
                        onChangeText={value => setMorbidityNote(value)}
                        multiline={true}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={handleAction}>
                <Text style={styles.action}>Tìm xe</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken,
    userId: selectUserId,
    profile: selectProfile
});

const mapDispatchToProps = dispatch => ({
    saveRequest: (token, userId, request, pickUp, destination) =>
        dispatch(saveRequest(token, userId, request, pickUp, destination)),
    updateStatusCode: statusCode => dispatch(updateStatusCode(statusCode)),
    fetchConfig: token => dispatch(fetchConfig(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(FindAmbulanceTab);

const styles = StyleSheet.create({
    booking: {
        position: "absolute",
        width: "100%",
        height: "auto",
        zIndex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    booking__header: {
        width: "85%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5
    },
    places: {
        width: "85%",
        display: "flex",
        flexDirection: "column"
    },
    requestType: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    action: {
        backgroundColor: "#f7f7f7",
        color: "#444",
        fontSize: 14,
        paddingVertical: 10,
        paddingHorizontal: "37%",
        borderRadius: 25,
        fontFamily: "Texgyreadventor-bold",
        textAlign: "center",
        marginTop: 5,
        marginBottom: 10
    },
    note: {
        paddingLeft: 20
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
