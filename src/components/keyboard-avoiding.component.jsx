import React from "react";
import { KeyboardAvoidingView, StyleSheet, ScrollView } from "react-native";

const KeyboardAvoiding = ({ conatainerStyle, style, children }) => (
    <KeyboardAvoidingView style={[styles.keyboardContainer, conatainerStyle]} behavior="height">
        <ScrollView style={style} alignItems="center" showsVerticalScrollIndicator={false}>
            {children}
        </ScrollView>
    </KeyboardAvoidingView>
);

export default KeyboardAvoiding;

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});
