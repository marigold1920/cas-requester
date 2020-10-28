import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Place from "./place.component";
import FeedbackShow from "./feedback-show.component";

const RequestHistoryInfo = ({
    request: {
        pickup,
        destination,
        feedbackDriver,
        ratingDriver,
        ratingService,
        feedbackService,
        emobidity,
        patientProfile
    }
}) => (
    <View style={styles.details}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Place placeName="Điểm đón" place={pickup} icon="https://i.ibb.co/D8HPk12/placeholder.png" />
            <Place placeName="Điểm đến" place={destination} icon="https://i.ibb.co/gWdQ69d/radar.png" />
            {ratingDriver || ratingService ? (
                <>
                    <FeedbackShow title="Đánh giá tài xế" content={feedbackDriver} level={ratingDriver} size={12} />
                    <FeedbackShow title="Đánh giá dịch vụ" content={feedbackService} level={ratingService} size={12} />
                </>
            ) : null}
            <FeedbackShow title="Tình trạng bệnh" content={emobidity} />
            {patientProfile ? <FeedbackShow title="Hồ sơ sức khỏe" content={patientProfile} /> : null}
            <FeedbackShow title="Ghi chú" content="Bệnh nhân không có giấy tờ tùy thân" />
        </ScrollView>
    </View>
);

export default RequestHistoryInfo;

const styles = StyleSheet.create({
    details: {
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
        paddingHorizontal: 30
    }
});
