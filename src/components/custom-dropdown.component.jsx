import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const CustomDropdown = ({ items, action, defaultValue, style }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={[styles.dropdown, style]}>
            <View style={styles.dropdownHeader}>
                <Text onPress={() => setIsActive(!isActive)} style={styles.defaultValue}>
                    {defaultValue}
                </Text>
                <Icon
                    style={{ marginRight: 10 }}
                    onPress={() => setIsActive(!isActive)}
                    name={isActive ? "up" : "down"}
                    size={16}
                    color="#444"
                />
            </View>
            <View style={[styles.options, isActive ? { opacity: 1, zIndex: 10 } : null]}>
                {items.map(({ id, value }) => (
                    <Text onPress={() => action(value)} key={id} style={styles.option}>
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
        width: "90%",
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 5,
        paddingVertical: 8,
        marginVertical: 2
        // opacity: 0.75
    },
    dropdownHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    defaultValue: {
        fontFamily: "Texgyreadventor-regular",
        color: "#787881",
        fontSize: 16,
        paddingHorizontal: 20
    },
    options: {
        position: "absolute",
        width: "100%",
        flexDirection: "column",
        top: 40,
        display: "flex",
        backgroundColor: "#DFE7F3",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        zIndex: -1,
        opacity: 0
    },
    option: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        color: "#787881",
        marginVertical: 8
    }
});
