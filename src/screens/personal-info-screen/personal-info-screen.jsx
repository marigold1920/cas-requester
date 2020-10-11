import React from "react";

import { View, TextInput, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import TextArea from "../../components/text-area.component";

import styles from "./personal-info-styles";

const PersonalInfoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackgroundImage>
                <View style={{ flex: 1 }}>
                    <HeaderTileWithBackBtn
                        textContent="Thông tin cá nhân"
                        gotoScreen={() => navigation.navigate("Home")}
                    />
                </View>
                <View style={styles.container_info}>
                    <AvatarNameCol
                        imgSource={require("../../../assets/icons/mock-avatar.png")}
                        textContent="Tín Trần"
                        contStyle={{ flex: 2 }}
                    />
                    <Text style={styles.joining_day_title}>Ngày tham gia</Text>
                    <Text style={styles.joining_day}>15/09/2020</Text>
                </View>
                <View style={styles.container_block_update_info}>
                    <View style={styles.container_text_input}>
                        <Text style={styles.label}>Tên</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="Tín Trần"
                        ></TextInput>
                    </View>
                    <View style={styles.container_text_input}>
                        <Text style={styles.label}>Số điện thoại</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="+84 931 738 872"
                        ></TextInput>
                    </View>
                    <View style={styles.container_button_save}>
                        <ButtonText
                            textContent="Lưu"
                            styleText={styles.button_text}
                            styleButton={styles.button_size}
                            gotoScreen={() => navigation.navigate("Home")}
                        />
                        <Text style={styles.text_policy}>
                            * Các thông tin cá nhân được bảo mật theo chính
                            sách, qui định của Nhà nước
                        </Text>
                    </View>
                </View>
            </BackgroundImage>
        </View>
    );
};

export default PersonalInfoScreen;
