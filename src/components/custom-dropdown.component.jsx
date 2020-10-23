import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const CustomDropdown = ({ items, action, defaultValue }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={styles.dropdown}>
            <View style={styles.dropdownHeader}>
                <Text onPress={() => setIsActive(!isActive)} style={styles.defaultValue}>
                    {defaultValue}
                </Text>
                <Icon onPress={() => setIsActive(!isActive)} name={isActive ? "up" : "down"} size={16} color="#444" />
            </View>
            <View style={[styles.options, isActive ? { opacity: 1, zIndex: 10 } : null]}>
                {items.map(({ itemId, value }) => (
                    <Text onPress={() => action(value)} key={itemId} style={styles.option}>
                        {value}
                    </Text>
                ))}
            </View>
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    dropdown: {
        position: "relative",
        borderWidth: 0.5,
        borderColor: "#444",
        borderRadius: 20,
        paddingVertical: 8,
        marginVertical: 2
    },
    dropdownHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    defaultValue: {
        fontFamily: "Texgyreadventor-regular",
        color: "#444",
        fontSize: 16,
        paddingHorizontal: 20
    },
    options: {
        position: "absolute",
        width: "100%",
        flexDirection: "column",
        top: 40,
        display: "flex",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        zIndex: -1,
        opacity: 0
    },
    option: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        color: "#444",
        marginVertical: 8
    }
});
