import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Rating from "./rating.component";

const FeedbackShow = ({ title, content, secondTitle, secondContent, level, size }) => (
    <View style={styles.feedback}>
        <>
            <Text style={styles.header}>{title}</Text>
            {level && <Rating level={Number.parseInt(level)} size={size} />}
            <Text style={styles.feedbackContent}>{content || "Không có phản hồi"}</Text>
        </>
        {secondContent && (
            <>
                <Text style={styles.header}>{secondTitle}</Text>
                <Text style={styles.feedbackContent}>{secondContent}</Text>
            </>
        )}
    </View>
);

export default FeedbackShow;

const styles = StyleSheet.create({
    feedback: {
        backgroundColor: "#fff",
        opacity: 0.75,
        borderRadius: 10,
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 12,
        fontFamily: "Texgyreadventor-bold"
    },
    feedbackContent: {
        fontSize: 12,
        fontFamily: "Texgyreadventor-regular",
        color: "#26324A"
    }
});
