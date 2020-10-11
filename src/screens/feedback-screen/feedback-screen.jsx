import React, { useState } from "react";
import { View, Image, Text, Modal } from "react-native";

import ButtonText from "../../components/button-text.component";
import BackgroundImage from "../../components/background-screen.component";

import styles from "./feedback-styles";
import Feedback from "../../components/feedback.component";

const FindCarScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <BackgroundImage>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>Đánh giá thành công</Text>
                            <Text style={styles.modalText}>Cảm ơn vì đánh giá của bạn</Text>
                        </View>
                    </View>
                </Modal>
                <View style={styles.container_logo_feedback}>
                    <Image style={styles.logo_img} source={require("../../../assets/icons/feedback-logo.png")} />
                    <Text style={styles.feedback_title}>Đánh giá dịch vụ</Text>
                    <Text style={styles.feed_description}>
                        Hãy giúp chúng tôi cải thiện dịch vụ với Charity Ambulance bằng cách đánh giá
                    </Text>
                </View>
                <Feedback placeholder="Nhận xét về dịch vụ" />
                <Feedback placeholder="Nhận xét về tài xế" />
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
            </BackgroundImage>
        </View>
    );
};
export default FindCarScreen;
