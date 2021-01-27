import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cleanUp, feedbackRequest } from "../../redux/request/request.actions";
import { selectToken } from "../../redux/user/user.selectors";
import { selectRequestId } from "../../redux/request/request.selectors";
import { selectStatusCode } from "../../redux/message/message.selectors";

import { message } from "../../utils/message.data";

import ButtonText from "../../components/button-text.component";
import Feedback from "../../components/feedback.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import Message from "../../components/message-modal.component";
import Spinner from "../../components/spinner.component";

import styles from "./feedback.styles";

const FeedbackScreen = ({
    navigation,
    feedbackRequest,
    token,
    requestId,
    cleanUp,
    route,
    statusCode
}) => {
    const [feedbackService, setFeedback] = useState("Dịch vụ hữu ích, cần được phổ biến rộng rãi");
    const [ratingService, setRating] = useState(5);
    const [feedbackDriver, setFeedbackDriver] = useState(
        "Thái độ nhiệt tình, có chuyên môn y tế dù là tài xế"
    );
    const [ratingDriver, setRatingDriver] = useState(5);
    const [loading, setLoading] = useState(false);
    const [rId, setRId] = useState(null);

    useEffect(() => {
        route && route.params && route.params.requestId && setRId(route.params.requestId);
    }, []);

    useEffect(() => {
        setLoading(false);
        statusCode &&
            setTimeout(() => {
                navigation.replace("Home");
            }, 2100);
    }, [statusCode]);

    const handleSubmit = () => {
        setLoading(true);
        feedbackRequest(token, rId || requestId, {
            feedbackService,
            feedbackDriver,
            ratingService,
            ratingDriver
        });
        cleanUp();
    };

    const handleExit = () => {
        cleanUp();
        rId ? navigation.navigate("Lịch sử") : navigation.replace("Home");
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            {loading && <Spinner />}
            <KeyboardAvoiding conatainerStyle={{ flex: 1 }} style={styles.container}>
                {statusCode && (
                    <Message message={message[statusCode]} isMessage={statusCode < 400} />
                )}
                <View style={styles.space__full}>
                    <HeaderTileWithBackBtn
                        textContent="Góp ý dịch vụ"
                        onPress={() => navigation.navigate("History")}
                    />
                    <View style={styles.container_logo_feedback}>
                        <Image
                            style={styles.logo_img}
                            source={require("../../../assets/icons/feedback-logo.png")}
                        />
                        <Text style={styles.feedback_title}>Yêu cầu hoàn tất</Text>
                        <Text style={styles.feed_description}>
                            Hãy giúp chúng tôi cải thiện dịch vụ bằng cách chia sẻ trải nghiệm của
                            bạn
                        </Text>
                    </View>
                    <Feedback
                        action={setRating}
                        defaultValue={feedbackService}
                        onChangeText={value => setFeedback(value)}
                        placeholder="Góp ý về dịch vụ"
                    />
                    <Feedback
                        action={setRatingDriver}
                        defaultValue={feedbackDriver}
                        onChangeText={value => setFeedbackDriver(value)}
                        placeholder="Góp ý về tài xế"
                    />
                    <View style={styles.container_submit}>
                        <ButtonText
                            textContent="Thoát"
                            styleText={styles.cancel_text}
                            styleButton={styles.cancel_button}
                            onPress={handleExit}
                        />
                        <ButtonText
                            textContent="Gửi"
                            styleText={styles.submit_text}
                            styleButton={styles.submit_button}
                            onPress={handleSubmit}
                        />
                    </View>
                </View>
            </KeyboardAvoiding>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken,
    requestId: selectRequestId,
    statusCode: selectStatusCode
});

const mapDispatchToProps = dispatch => ({
    feedbackRequest: (token, requestId, feedback) =>
        dispatch(feedbackRequest(token, requestId, feedback)),
    cleanUp: () => dispatch(cleanUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackScreen);
