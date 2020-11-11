import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import rem from "./constant.unit";
import Rating from "./rating.component";

const Feedback = ({ level, action, ...otherProps }) => (
    <View style={styles.container_feedback_content}>
        <Rating size={18} level={level} setLevel={action} />
        <TextInput
            style={styles.textArea}
            placeholderTextColor="grey"
            numberOfLines={5}
            multiline={true}
            {...otherProps}
        />
    </View>
);

const styles = StyleSheet.create({
    container_feedback_content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginVertical: 5
    },
    rating_block: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10
    },
    rating_icon: {
        width: 20,
        height: 20,
        marginHorizontal: 3
    },
    textArea: {
        borderRadius: 10,
        padding: 15,
        backgroundColor: "#FFF",
        width: 25 * rem,
        height: 7 * rem,
        textAlignVertical: "top",
        fontFamily: "Texgyreadventor-regular"
    }
});

export default Feedback;
