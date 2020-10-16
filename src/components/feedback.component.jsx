import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, TextInput } from "react-native";

import rem from "./constant.unit";

const Feedback = ({ placeholder }) => (
    <View style={styles.container_feedback_content}>
        <View style={styles.rating_block}>
            <TouchableOpacity>
                <Image style={styles.rating_icon} source={require("../../assets/icons/yellow-star.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.rating_icon} source={require("../../assets/icons/yellow-star.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.rating_icon} source={require("../../assets/icons/yellow-star.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.rating_icon} source={require("../../assets/icons/yellow-star.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.rating_icon} source={require("../../assets/icons/yellow-star.png")} />
            </TouchableOpacity>
        </View>
        <View style={styles.textArea_block}>
            <TextInput
                style={styles.textArea}
                placeholder={placeholder}
                placeholderTextColor="grey"
                numberOfLines={5}
                multiline={true}
            />
        </View>
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
    textArea_block: {
        flex: 3
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
