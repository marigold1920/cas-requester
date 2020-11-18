import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser, selectProfile, selectToken } from "../../redux/user/user.selectors";
import { updateProfile } from "../../redux/user/user.actions";

import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import CustomInputLabel from "../../components/custom-input-label.component";

import styles from "./profile.styles";

const ProfileScreen = ({
    navigation,
    currentUser: { userId, displayName, imageUrl },
    profile,
    token,
    updateProfile
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [morbidity, setMorbidity] = useState((profile && profile.morbidity) || "");
    const [gender, setGender] = useState((profile && profile.gender) || "Nam");
    const [age, setAge] = useState((profile && profile.age) || "0");
    const [bloodPressure, setBloodPressure] = useState((profile && profile.bloodPressure) || "");
    const [medicalHistories, setMedicalHistories] = useState(
        (profile && profile.medicalHistories && profile.medicalHistories.split(", ")) || []
    );
    const [allergy, setAllergy] = useState((profile && profile.allergy) || "");
    const [others, setOthers] = useState((profile && profile.others) || "");

    const handleUpdate = () => {
        updateProfile(userId, token, {
            gender,
            age,
            bloodPressure,
            morbidity,
            medicalHistories: medicalHistories.join(", "),
            allergy,
            others
        });
        setModalVisible(true);
    };

    return (
        <BackgroundImage>
            <View style={[styles.modal, modalVisible ? { opacity: 0.85, zIndex: 10 } : null]}>
                <View style={styles.modal__content}>
                    <Text style={styles.status}>Cập nhật thông tin thành công</Text>
                    <Text
                        onPress={() => {
                            setModalVisible(false);
                        }}
                        style={styles.action}
                    >
                        Đóng
                    </Text>
                </View>
            </View>
            <HeaderTileWithBackBtn
                textContent="Hồ sơ sức khỏe"
                onPress={() => navigation.goBack()}
            />
            <AvatarNameCol linkImage={imageUrl} textContent={displayName} />
            <KeyboardAvoiding conatainerStyle={{ flex: 1 }} style={styles.container}>
                <View style={styles.profile}>
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
                        defaultValue={gender}
                        onChangeItem={item => setGender(item.value)}
                    />
                    <CustomInputLabel
                        label="Tuổi"
                        placeholder="64"
                        defaultValue={age}
                        onChangeText={value => setAge(value)}
                        keyboardType="numeric"
                        isRequire
                    />
                    <CustomInputLabel
                        label="Huyết áp"
                        defaultValue={bloodPressure}
                        onChangeText={value => setBloodPressure(value)}
                        placeholder="135/80"
                    />
                    <CustomInputLabel
                        label="Tình trạng hiện nay"
                        defaultValue={morbidity}
                        onChangeText={value => setMorbidity(value)}
                        isRequire
                        multiline={true}
                        numberOfLines={4}
                    />
                    <View style={styles.group}>
                        <Text style={styles.label}>Tiền sử bệnh</Text>
                    </View>
                    <DropDownPicker
                        placeholder="Bệnh đã từng mắc"
                        defaultValue={medicalHistories}
                        containerStyle={{ width: "90%", marginVertical: 5 }}
                        labelStyle={{ fontFamily: "Texgyreadventor-regular", color: "#787881" }}
                        itemStyle={{ marginVertical: 2 }}
                        searchable={true}
                        searchablePlaceholder={"Tìm kiếm"}
                        searchableStyle={{
                            fontFamily: "Texgyreadventor-regular",
                            color: "#787881"
                        }}
                        multiple={true}
                        items={[
                            { label: "Bệnh gan mãn tĩnh", value: "Bệnh gan mãn tĩnh" },
                            { label: "Bệnh máu mãn tính", value: "Bệnh máu mãn tính" },
                            { label: "Bệnh phổi mãn tính", value: "Bệnh phổi mãn tính" },
                            { label: "Bệnh thận mãn tĩnh", value: "Bệnh thận mãn tĩnh" },
                            { label: "Bệnh tim mạch", value: "Bệnh tim mạch" },
                            { label: "Huyết áp cao", value: "Huyết áp cao" },
                            { label: "Suy giảm miễn dịch", value: "Suy giảm miễn dịch" },
                            {
                                label: "Người nhận ghép tạng , Thủy xương",
                                value: "Người nhận ghép tạng , Thủy xương"
                            },
                            { label: "Tiểu đường", value: "Tiểu đường" },
                            { label: "Ung thư", value: "Ung thư" }
                        ]}
                        onChangeItem={item => setMedicalHistories(item)}
                    />
                    <CustomInputLabel
                        defaultValue={allergy}
                        onChangeText={value => setAllergy(value)}
                        label="Dược tính gây mẫn cảm, dị ứng"
                        placeholder="carbamazepine, phenobarbital và phenytoin"
                        multiline={true}
                        numberOfLines={4}
                    />
                    <CustomInputLabel
                        defaultValue={others}
                        onChangeText={value => setOthers(value)}
                        label="Vấn đề khác"
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
            </KeyboardAvoiding>
            <ButtonText
                textContent="Cập nhật"
                styleButton={styles.button}
                styleText={styles.button_text}
                onPress={handleUpdate}
            />
        </BackgroundImage>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    profile: selectProfile,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    updateProfile: (userId, token, healthInformation) =>
        dispatch(updateProfile(userId, token, healthInformation))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
