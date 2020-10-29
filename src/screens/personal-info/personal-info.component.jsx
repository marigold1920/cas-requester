import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./personal-info.styles";

const PersonalInfoScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <BackgroundImage>
            <View style={[styles.modal, modalVisible ? { opacity: 0.85, zIndex: 10 } : null]}>
                <View style={styles.modal__content}>
                    <Text style={styles.status}>Lưu thông tin thành công</Text>
                    <Text
                        onPress={() => {
                            setModalVisible(false);
                            navigation.navigate("Home");
                        }}
                        style={styles.action}
                    >
                        Đóng
                    </Text>
                </View>
            </View>
            <View>
                <HeaderTileWithBackBtn textContent="Thông tin cá nhân" onPress={() => navigation.navigate("Home")} />
            </View>
            <View style={styles.container_info}>
                <AvatarNameCol imgSource={require("../../../assets/icons/mock-avatar.png")} textContent="Hữu Công" />
                <Text style={styles.joining_day_title}>Ngày tham gia</Text>
                <Text style={styles.joining_day}>15/09/2020</Text>
            </View>
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.container_text_input}>
                    <Text style={styles.label}>Tên *</Text>
                    <TextInput style={styles.text_input} defaultValue="Hữu Công" />
                </View>
                <View style={styles.container_text_input}>
                    <Text style={styles.label}>Số điện thoại *</Text>
                    <TextInput style={styles.text_input} defaultValue="+84 931 738 872" />
                </View>
            </KeyboardAvoiding>
            <View style={styles.container_button_save}>
                <ButtonText
                    textContent="Lưu"
                    styleText={styles.button_text}
                    styleButton={styles.button_size}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                />
                <Text style={styles.text_policy}>
                    * Các thông tin cá nhân được bảo mật theo chính sách, qui định của Nhà nước
                </Text>
            </View>
        </BackgroundImage>
    );
};

export default PersonalInfoScreen;
