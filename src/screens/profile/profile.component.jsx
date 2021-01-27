import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser, selectProfile, selectToken } from "../../redux/user/user.selectors";
import { selectStatusCode } from "../../redux/message/message.selectors";
import { updateProfile } from "../../redux/user/user.actions";
import { message } from "../../utils/message.data";

import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import CustomInputLabel from "../../components/custom-input-label.component";
import MessageModal from "../../components/message-modal.component";

import styles from "./profile.styles";
import { updateStatusCode } from "../../redux/message/message.action";

const ProfileScreen = ({
    navigation,
    currentUser: { id, displayName, imageUrl },
    profile,
    token,
    statusCode,
    updateProfile,
    updateStatusCode
}) => {
    const [morbidity, setMorbidity] = useState((profile && profile.morbidity) || "");
    const [gender, setGender] = useState((profile && profile.gender) || "Nam");
    const [age, setAge] = useState((profile && profile.age) || 0);
    const [bloodPressure, setBloodPressure] = useState((profile && profile.bloodPressure) || "");
    const [medicalHistories, setMedicalHistories] = useState(
        (profile && profile.medicalHistories) || ""
    );
    const [allergy, setAllergy] = useState((profile && profile.allergy) || "");
    const [others, setOthers] = useState((profile && profile.others) || "");
    const [validation, setValidation] = useState({
        age: null,
        morbidity: null
    });

    const handleUpdate = () => {
        if (validation.age || validation.morbidity) {
            return;
        }

        if (age && morbidity) {
            updateProfile(id, token, {
                gender,
                age,
                bloodPressure,
                morbidity,
                medicalHistories,
                allergy,
                others
            });
        } else {
            updateStatusCode(406);
        }
    };

    const checkAge = () => {
        if (age < 1 || age > 150) {
            setValidation({ ...validation, age: "Tuổi nằm trong khoảng từ 1-150" });
        }
    };

    return (
        <BackgroundImage>
            {statusCode && (
                <MessageModal message={message[statusCode]} isMessage={statusCode < 400} />
            )}
            <HeaderTileWithBackBtn textContent="Thông tin sức khỏe" />
            <AvatarNameCol linkImage={imageUrl} textContent={displayName} />
            <KeyboardAvoiding conatainerStyle={{ flex: 1 }} style={styles.container}>
                <View style={styles.profile}>
                    <View style={styles.group}>
                        <Text style={styles.label}>Giới tính *</Text>
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
                    {validation.age && <Text style={styles.warning}>{validation.age}</Text>}
                    <CustomInputLabel
                        label="Tuổi"
                        placeholder="64"
                        defaultValue={age}
                        onChangeText={value => setAge(value)}
                        keyboardType="numeric"
                        isRequire
                        onBlur={checkAge}
                        onFocus={() => setValidation({ ...validation, age: null })}
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
                    <CustomInputLabel
                        label="Tiền sử bệnh"
                        defaultValue={medicalHistories}
                        onChangeText={value => setMedicalHistories(value)}
                        multiline={true}
                        numberOfLines={4}
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
    token: selectToken,
    statusCode: selectStatusCode
});

const mapDispatchToProps = dispatch => ({
    updateProfile: (userId, token, healthInformation) =>
        dispatch(updateProfile(userId, token, healthInformation)),
    updateStatusCode: statusCode => dispatch(updateStatusCode(statusCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
