import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { withNavigation } from "react-navigation";
import DropDownPicker from "react-native-dropdown-picker";

import BookingHeaderItem from "./booking-header-item.component";
import FormInput from "./form-input.component";
import CustomOption from "./option.component";
import { deviceRevolution } from "./constant.unit";

const FindOwnAmbulanceTab = ({ isOthers, setIsOthers, setIsLoading, navigation }) => {
    const [pickUp, setPickUp] = useState("Vị trí của bạn");
    const [destination, setDestination] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [profile, setProfile] = useState("");
    const [requestType, setRequestType] = useState("emergency");
    const [status, setStatus] = useState("");

    const handleAction = () => {
        setIsLoading(true);
        // setTimeout(() => {
        //     setIsLoading(false);
        //     navigation.navigate("RequestInfo");
        // }, 5000);
    };

    const handleRequestType = value => {
        setRequestType(value);
        // setDestination(value === "emergency" ? "Bệnh viện Gia Định" : "");
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
        <View style={[styles.booking, isOthers ? { height: deviceRevolution.height * 0.7 } : null]}>
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
            <View style={styles.places}>
                <View style={styles.requestType}>
                    <RadioButton.Group value={requestType} onValueChange={handleRequestType}>
                        {options.map(({ itemId, ...otherProps }) => (
                            <CustomOption key={itemId} {...otherProps} />
                        ))}
                    </RadioButton.Group>
                </View>
                <FormInput
                    onChangeText={value => setPickUp(value)}
                    placeholder="Điểm đón"
                    defaultValue={pickUp}
                    icon="https://i.ibb.co/D8HPk12/placeholder.png"
                />
                {requestType === "emergency" ? (
                    <DropDownPicker
                        placeholder="Tình trạng cấp cứu"
                        placeholderStyle={{ color: "#999" }}
                        containerStyle={{ height: 45 }}
                        style={{
                            backgroundColor: "#fff",
                            borderColor: "#444",
                            borderWidth: 0.5,
                            marginVertical: 2
                        }}
                        labelStyle={{ fontSize: 16, fontFamily: "Texgyreadventor-regular", color: "#444" }}
                        items={statusItems}
                        defaultValue={status}
                        onChangeItem={item => setStatus(item.value)}
                    />
                ) : null}
                <FormInput
                    onChangeText={value => setDestination(value)}
                    placeholder="Điểm cần đến"
                    defaultValue={destination}
                    icon="https://i.ibb.co/gWdQ69d/radar.png"
                />
                {isOthers ? (
                    <>
                        <FormInput
                            placeholder="Tên"
                            defaultValue={name}
                            onChangeText={value => setName(value)}
                            icon="https://i.ibb.co/9cR5tcy/name.png"
                        />
                        <FormInput
                            placeholder="Số điện thoại"
                            defaultValue={phone}
                            onChangeText={value => setPhone(value)}
                            icon="https://i.ibb.co/cctFq5g/phone-call.png"
                        />
                    </>
                ) : null}
                <TextInput
                    style={styles.note}
                    placeholder="Ghi chú"
                    numberOfLines={2}
                    defaultValue={note}
                    onChangeText={value => setNote(value)}
                />
            </View>
            <Text onPress={handleAction} style={styles.action}>
                Tìm xe
            </Text>
        </View>
    );
};

export default withNavigation(FindOwnAmbulanceTab);

const styles = StyleSheet.create({
    booking: {
        position: "relative",
        height: deviceRevolution.height * 0.6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    booking__header: {
        width: "85%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    places: {
        width: "85%",
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
        backgroundColor: "#FF8946",
        color: "#fff",
        fontSize: 18,
        paddingVertical: 8,
        paddingHorizontal: 40,
        marginTop: 5,
        borderRadius: 25,
        fontFamily: "Texgyreadventor-regular"
    },
    note: {
        width: "100%",
        borderWidth: 0.5,
        borderColor: "#444444",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginVertical: 5,
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        zIndex: -1
    }
});
