import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cleanUp, feedbackRequest } from "../../redux/request/request.actions";
import { selectToken } from "../../redux/user/user.selectors";
import { selectRequestId } from "../../redux/request/request.selectors";

import ButtonText from "../../components/button-text.component";
import BackgroundImage from "../../components/background-screen.component";
import Feedback from "../../components/feedback.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";

import styles from "./feedback.styles";

const FeedbackScreen = ({ navigation, feedbackRequest, token, requestId, cleanUp }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [feedbackService, setFeedback] = useState("Dịch vụ hữu ích, cần được phổ biến rộng rãi");
    const [ratingService, setRating] = useState(5);
    const [feedbackDriver, setFeedbackDriver] = useState(
        "Thái độ nhiệt tình, có chuyên môn y tế dù là tài xế"
    );
    const [ratingDriver, setRatingDriver] = useState(5);

    const handleSubmit = () => {
        feedbackRequest(token, requestId, {
            feedbackService,
            feedbackDriver,
            ratingService,
            ratingDriver
        });
        setModalVisible(true);
        cleanUp();
        clearDrivers();
    };

    const handleExit = () => {
        clearDrivers();
        cleanUp();
        navigation.navigate("Home");
    };

    return (
        <BackgroundImage>
            <KeyboardAvoiding conatainerStyle={{ flex: 1 }} style={styles.container}>
                <View style={[styles.modal, modalVisible ? { opacity: 0.85, zIndex: 10 } : null]}>
                    <View style={styles.modal__content}>
                        <Text style={styles.status}>Góp ý thành công</Text>
                        <Text style={styles.message}>Cảm ơn bạn đã góp ý về dịch vụ!</Text>
                        <Text onPress={() => navigation.navigate("Home")} style={styles.action}>
                            Đóng
                        </Text>
                    </View>
                </View>
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
        </BackgroundImage>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken,
    requestId: selectRequestId
});

const mapDispatchToProps = dispatch => ({
    feedbackRequest: (token, requestId, feedback) =>
        dispatch(feedbackRequest(token, requestId, feedback)),
    cleanUp: () => dispatch(cleanUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackScreen);
