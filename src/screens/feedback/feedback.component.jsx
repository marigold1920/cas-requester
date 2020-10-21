import React, { useState } from "react";
import { View, Image, Text } from "react-native";

import ButtonText from "../../components/button-text.component";
import BackgroundImage from "../../components/background-screen.component";
import Feedback from "../../components/feedback.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";

import styles from "./feedback.styles";

const FindCarScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <BackgroundImage>
            <KeyboardAvoiding style={styles.container}>
                <View style={[styles.modal, modalVisible ? { opacity: 0.85, zIndex: 10 } : null]}>
                    <View style={styles.modal__content}>
                        <Text style={styles.status}>Góp ý thành công</Text>
                        <Text style={styles.message}>Cảm ơn bạn đã góp ý về dịch vụ!</Text>
                        <Text onPress={() => setModalVisible(false)} style={styles.action}>
                            Đóng
                        </Text>
                    </View>
                </View>
                <View style={styles.space__full}>
                    <HeaderTileWithBackBtn
                        textContent="Góp ý dich vụ"
                        gotoScreen={() => navigation.navigate("History")}
                    />
                    <View style={styles.container_logo_feedback}>
                        <Image style={styles.logo_img} source={require("../../../assets/icons/feedback-logo.png")} />
                        <Text style={styles.feedback_title}>Góp ý dịch vụ</Text>
                        <Text style={styles.feed_description}>
                            Hãy giúp chúng tôi cải thiện dịch vụ bằng cách chia sẻ trải nghiệm của bạn
                        </Text>
                    </View>
                    <Feedback placeholder="Góp ý về dịch vụ" />
                    <Feedback placeholder="Góp ý về tài xế" />
                    <View style={styles.container_submit}>
                        <ButtonText
                            textContent="Thoát"
                            styleText={styles.cancel_text}
                            styleButton={styles.cancel_button}
                            gotoScreen={() => navigation.navigate("Home")}
                        />
                        <ButtonText
                            textContent="Gửi"
                            styleText={styles.submit_text}
                            styleButton={styles.submit_button}
                            gotoScreen={() => {
                                setModalVisible(true);
                            }}
                        />
                    </View>
                </View>
            </KeyboardAvoiding>
        </BackgroundImage>
    );
};
export default FindCarScreen;
