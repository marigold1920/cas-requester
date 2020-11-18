import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Place from "./place.component";
import FeedbackShow from "./feedback-show.component";

const RequestHistoryInfo = ({
    request: {
        pickUp,
        destination,
        patientName,
        patientPhone,
        healthInformation,
        feedbackDriver,
        ratingDriver,
        ratingService,
        feedbackService,
        morbidity,
        isEmergency,
        morbidityNote,
        note
    }
}) => (
    <View style={styles.details}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {pickUp && (
                <Place
                    placeName="Điểm đón"
                    place={pickUp}
                    icon="https://i.ibb.co/D8HPk12/placeholder.png"
                />
            )}
            {destination && (
                <Place
                    placeName="Điểm đến"
                    place={destination}
                    icon="https://i.ibb.co/gWdQ69d/radar.png"
                />
            )}
            {(ratingDriver || ratingService) && (
                <>
                    <FeedbackShow
                        title="Đánh giá tài xế"
                        content={feedbackDriver}
                        level={ratingDriver}
                        size={12}
                    />
                    <FeedbackShow
                        title="Đánh giá dịch vụ"
                        content={feedbackService}
                        level={ratingService}
                        size={12}
                    />
                </>
            )}
            {isEmergency && morbidity && (
                <FeedbackShow title="Tình trạng bệnh" content={mobidity} />
            )}
            {(patientName || patientPhone) && (
                <FeedbackShow
                    title="Tên người bệnh"
                    secondTitle="Số điện thoại"
                    secondContent={patientPhone}
                    content={patientName}
                />
            )}
            {healthInformation && (
                <FeedbackShow title="Hồ sơ sức khỏe" content={healthInformation} />
            )}
            {morbidityNote && <FeedbackShow title="Ghi chú người gửi" content={morbidityNote} />}
            {note && <FeedbackShow title="Ghi chú" content={note} />}
        </ScrollView>
    </View>
);

export default RequestHistoryInfo;

const styles = StyleSheet.create({
    details: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
        paddingHorizontal: 20
    }
});
