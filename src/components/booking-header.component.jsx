import React from "react";
import { View, StyleSheet } from "react-native";

import BookingHeaderItem from "./booking-header-item.component";

const BookingHeader = ({ activeTab }) => (
    <View style={styles.booking__header}>
        <BookingHeaderItem isActive={activeTab == "own" ? true : false} content="Tìm xe cho bạn" />
        <BookingHeaderItem isActive={activeTab != "own" ? true : false} content="Tìm xe cho người khác" />
    </View>
);

export default BookingHeader;

const styles = StyleSheet.create({
    booking__header: {
        width: "85%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    }
});
