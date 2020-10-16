import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { withNavigation } from "react-navigation";

import BookingHeaderItem from "./booking-header-item.component";
import { deviceRevolution } from "./constant.unit";
import FormInput from "./form-input.component";

const FindOwnAmbulanceTab = ({ setIsReverse, isOthers, setIsOthers, setIsLoading, navigation }) => {
    const [pickUp, setPickUp] = useState("Vị trí hiện tại");
    const [destination, setDestination] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");

    const handleAction = () => {
        setIsLoading(true);
        setTimeout(() => {
            navigation.navigate("TripInfo");
        }, 15000);
    };

    return (
        <View style={[styles.booking, isOthers ? { height: deviceRevolution.height * 0.6 } : null]}>
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
                <FormInput
                    onFocus={() => setIsReverse(true)}
                    onChangeText={value => setPickUp(value)}
                    placeholder="Điểm đón"
                    defaultValue={pickUp}
                    icon="https://i.ibb.co/D8HPk12/placeholder.png"
                />
                <FormInput
                    onFocus={() => setIsReverse(true)}
                    onChangeText={value => setDestination(value)}
                    placeholder="Điểm đến"
                    defaultValue={destination}
                    icon="https://i.ibb.co/gWdQ69d/radar.png"
                />
                {isOthers ? (
                    <>
                        <FormInput
                            onFocus={() => setIsReverse(true)}
                            placeholder="Tên"
                            defaultValue={name}
                            onChangeText={value => setName(value)}
                            icon="https://i.ibb.co/9cR5tcy/name.png"
                        />
                        <FormInput
                            onFocus={() => setIsReverse(true)}
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
        height: deviceRevolution.height * 0.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    booking__header: {
        width: "85%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    places: {
        width: "85%",
        display: "flex",
        flexDirection: "column"
    },
    item: {
        position: "relative"
    },
    action: {
        backgroundColor: "#FF8946",
        color: "#fff",
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginBottom: 10,
        borderRadius: 25,
        fontFamily: "Texgyreadventor-regular",
        elevation: 12
    },
    note: {
        width: "100%",
        borderWidth: 0.25,
        borderColor: "#6F6F6F",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginVertical: 5,
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16
    }
});
