import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import TextArea from "../../components/text-area.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import CustomInputLabel from "../../components/custom-input-label.component";

import styles from "./profile.styles";
import DropDownPicker from "react-native-dropdown-picker";

const ProfileScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [morbidity, setMorbidity] = useState([]);

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
                <HeaderTileWithBackBtn textContent="Hồ sơ bệnh" gotoScreen={() => navigation.navigate("Home")} />
                <AvatarNameCol
                    imgSource={require("../../../assets/icons/mock-avatar.png")}
                    textContent="Tín Trần"
                    contStyle={{ flex: 2 }}
                />
                <View style={styles.container_button}>
                    <View style={styles.group}>
                        <Text style={styles.label}>Giới tính</Text>
                    </View>
                    <DropDownPicker
                        containerStyle={{ width: "90%", marginVertical: 5 }}
                        labelStyle={{ fontFamily: "Texgyreadventor-regular", color: "#787881" }}
                        items={[
                            { label: "Nam", value: "Nam" },
                            { label: "Nữ", value: "Nữ" },
                            { label: "Khác", value: "Khác" }
                        ]}
                        defaultValue={"Nam"}
                    />
                    <CustomInputLabel label="Tuổi" placeholder="64" isRequire />
                    <CustomInputLabel label="Huyết áp" placeholder="135/80" isRequire />
                    <CustomInputLabel
                        label="Tình trạng hiện nay"
                        defaultValue="Vài triệu chứng liên quan đến phổi, hay đau đầu, thị lực suy giảm"
                        isRequire
                        multiline={true}
                        numberOfLines={4}
                    />
                    <View style={styles.group}>
                        <Text style={styles.label}>Tiền sử bệnh</Text>
                    </View>
                    <DropDownPicker
                        placeholder="Bệnh đã từng mắc"
                        containerStyle={{ width: "90%", marginVertical: 5 }}
                        labelStyle={{ fontFamily: "Texgyreadventor-regular", color: "#787881" }}
                        itemStyle={{ marginVertical: 2 }}
                        searchable={true}
                        searchablePlaceholder={"Tìm kiếm"}
                        searchableStyle={{ fontFamily: "Texgyreadventor-regular", color: "#787881" }}
                        multiple={true}
                        items={[
                            { label: "Bệnh gan mãn tĩnh", value: "Bệnh gan mãn tĩnh" },
                            { label: "Bệnh máu mãn tính", value: "Bệnh máu mãn tính" },
                            { label: "Bệnh phổi mãn tính", value: "Bệnh phổi mãn tính" },
                            { label: "Bệnh thận mãn tĩnh", value: "Bệnh thận mãn tĩnh" },
                            { label: "Bệnh tim mạch", value: "Bệnh tim mạch" },
                            { label: "Huyết áp cao", value: "Huyết áp cao" },
                            { label: "Suy giảm miễn dịch", value: "Suy giảm miễn dịch" },
                            { label: "Người nhận ghép tạng , Thủy xương", value: "Người nhận ghép tạng , Thủy xương" },
                            { label: "Tiểu đường", value: "Tiểu đường" },
                            { label: "Ung thư", value: "Ung thư" }
                        ]}
                        defaultValue={morbidity}
                        onChangeItem={item => setMorbidity(item)}
                    />
                    <CustomInputLabel
                        label="Dược tính gây mẫn cảm, dị ứng"
                        placeholder="carbamazepine, phenobarbital và phenytoin"
                        isRequire
                        multiline={true}
                        numberOfLines={4}
                    />
                    <CustomInputLabel label="Vấn đề khác" multiline={true} numberOfLines={4} />
                    <ButtonText
                        textContent="Cập nhật"
                        styleButton={styles.button}
                        styleText={styles.button_text}
                        gotoScreen={() => setModalVisible(true)}
                    />
                </View>
            </KeyboardAvoiding>
        </BackgroundImage>
    );
};

export default ProfileScreen;
