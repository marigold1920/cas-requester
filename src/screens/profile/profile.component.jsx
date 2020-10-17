import React from "react";
import { View } from "react-native";

import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import TextArea from "../../components/text-area.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./profile.styles";

const ProfileScreen = ({ navigation }) => {
    return (
        <BackgroundImage>
            <KeyboardAvoiding style={styles.container}>
                <HeaderTileWithBackBtn textContent="Hồ sơ bệnh" gotoScreen={() => navigation.navigate("Home")} />
                <AvatarNameCol
                    imgSource={require("../../../assets/icons/mock-avatar.png")}
                    textContent="Tín Trần"
                    contStyle={{ flex: 2 }}
                />
                <View style={styles.container_button}>
                    <TextArea
                        textContent="Tình trạng hiện nay:"
                        defaultValue="Vài triệu chứng liên quan đến phổi, hay đau đầu, thị lực suy giảm"
                    />
                    <ButtonText
                        textContent="Cập nhật"
                        styleButton={styles.button}
                        styleText={styles.button_text}
                        gotoScreen={() => navigation.navigate("Home")}
                    />
                </View>
            </KeyboardAvoiding>
        </BackgroundImage>
    );
};

export default ProfileScreen;