import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Rating } from "react-native-ratings";

import rem from "./constant.unit";

const Feedback = ({ action, ...otherProps }) => {
    return (
        <View style={styles.container_feedback_content}>
            <Rating
                type="heart"
                imageSize={20}
                fractions={1}
                startingValue={5}
                minValue={1}
                onFinishRating={rating => action(rating)}
            />
            <TextInput
                style={styles.textArea}
                placeholderTextColor="grey"
                numberOfLines={5}
                multiline={true}
                {...otherProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container_feedback_content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
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
        backgroundColor: "#f9f9f9",
        width: 25 * rem,
        height: 7 * rem,
        textAlignVertical: "top",
        fontFamily: "Texgyreadventor-regular",
        // marginBottom: 5,
        marginTop: 5
    }
});

export default Feedback;
