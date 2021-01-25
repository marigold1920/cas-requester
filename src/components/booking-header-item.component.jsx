import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BookingHeaderItem = ({ isActive, content, ...otherProps }) => (
    <View style={[styles.header__wrapper, isActive ? styles.active : null]}>
        <Text
            {...otherProps}
            style={[styles.header__wrapper__text, isActive ? styles.active__text : null]}
        >
            {content}
        </Text>
    </View>
);

export default BookingHeaderItem;

const styles = StyleSheet.create({
    header__wrapper: {
        paddingVertical: 2,
        paddingHorizontal: 10
    },
    header__wrapper__text: {
        color: "#444444",
        fontFamily: "Texgyreadventor-bold",
        fontSize: 13
    },
    active: {
        borderWidth: 0.75,
        borderColor: "#00B955",
        borderRadius: 20
    },
    active__text: {
        color: "#00B955"
    }
});
