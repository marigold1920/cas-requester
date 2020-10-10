import React from "react";

import { View, TextInput, Text } from "react-native";
import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import TextArea from "../../components/text-area.component";

import styles from "./profile-styles";

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackgroundImage>
                <AvatarNameCol
                    imgSource={require("../../../assets/icons/mock-avatar.png")}
                    textContent="Tín Trần"
                    contStyle={{ flex: 2 }}
                />
                <View style={styles.container_button}>
                    <TextArea textContent="Đã từng mắc bệnh:" />
                    <TextArea textContent="Tình trạng hiện nay:" />
                    <ButtonText
                        textContent="Cập nhật"
                        styleButton={styles.button}
                        styleText={styles.button_text}
                        gotoScreen={() => navigation.navigate("Home")}
                    />
                </View>
            </BackgroundImage>
        </View>
    );
};

export default ProfileScreen;
