import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import CustomInputLabel from "../../components/custom-input-label.component";

import styles from "./profile.styles";

const ProfileScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [gender, setGender] = useState("Nam");

    return (
        <BackgroundImage>
            <View style={[styles.modal, modalVisible ? { opacity: 0.85, zIndex: 10 } : null]}>
                <View style={styles.modal__content}>
                    <Text style={styles.status}>Cập nhật thông tin thành công</Text>
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
            <KeyboardAvoiding style={styles.container}>
                <HeaderTileWithBackBtn textContent="Hồ sơ sức khỏe" gotoScreen={() => navigation.navigate("Home")} />
                <AvatarNameCol
                    imgSource={require("../../../assets/icons/mock-avatar.png")}
                    textContent="Tín Trần"
                    contStyle={{ flex: 2 }}
                />
                <View style={styles.container_button}>
                    <View style={styles.group}>
                        <Text style={styles.label}>
                            Giới tính <Text style={styles.require}>*</Text>
                        </Text>
                    </View>
                    <DropDownPicker
                        items={[
                            { label: "Nam", value: "Nam" },
                            { label: "Nữ", value: "Nữ" },
                            { label: "Khác", value: "Khác" }
                        ]}
                        defaultValue={gender}
                        onChangeItem={item => setGender(item.value)}
                        labelStyle={styles.option}
                        containerStyle={{ width: "90%", marginVertical: 5 }}
                        onChangeItem={item => setGender(item.value)}
                    />
                    <CustomInputLabel label="Tuổi" placeholder="64" isRequire />
                    <CustomInputLabel label="Huyết áp" placeholder="135/60" isRequire />
                    <CustomInputLabel
                        label="Tình trạng hiện nay"
                        placeholder="135/60"
                        isRequire
                        defaultValue="Vài triệu chứng liên quan đến phổi, hay đau đầu, thị lực suy giảm"
                        multiline={true}
                        numberOfLines={4}
                    />
                    <View style={styles.group}>
                        <Text style={styles.label}>Tiền sử bệnh</Text>
                    </View>
                    <DropDownPicker
                        items={[
                            { label: "Bệnh gan mãn tĩnh", value: "Bệnh gan mãn tĩnh" },
                            { label: "Bệnh máu mãn tính", value: "Bệnh máu mãn tính" },
                            { label: "Bệnh phổi mãn tính", value: "Bệnh phổi mãn tính" },
                            { label: "Bệnh thận mãn tĩnh", value: "Bệnh thận mãn tĩnh" },
                            { label: "Bệnh tim mạch", value: "Bệnh tim mạch" },
                            { label: "Huyết áp cao", value: "Huyết áp cao" },
                            { label: "Suy giảm miễn dịch", value: "Suy giảm miễn dịch" },
                            { label: "Tiểu đường", value: "Tiểu đường" }
                        ]}
                        placeholder={"Bệnh đã từng mắc"}
                        onChangeItem={item => setGender(item.value)}
                        labelStyle={styles.option}
                        containerStyle={{ width: "90%", marginVertical: 5 }}
                    />
                    <CustomInputLabel
                        label="Dược liệu gây mẫn cảm, dị ứng"
                        placeholder="carbamazepine, phenobarbital và phenytoin"
                        isRequire
                        multiline={true}
                        numberOfLines={4}
                    />
                    <CustomInputLabel label="Vấn đề khác" multiline={true} numberOfLines={4} />
                </View>
            </KeyboardAvoiding>
            <ButtonText
                textContent="Cập nhật"
                styleButton={styles.button}
                styleText={styles.button_text}
                gotoScreen={() => setModalVisible(true)}
            />
        </BackgroundImage>
    );
};

export default ProfileScreen;
