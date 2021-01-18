import React, { useState, useRef } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";

import { selectCurrentUser, selectToken } from "../../redux/user/user.selectors";
import { selectStatusCode } from "../../redux/message/message.selectors";
import { updateUser } from "../../redux/user/user.actions";
import { message } from "../../utils/message.data";

import AvatarNameCol from "../../components/avatar-name-column.component";
import BackgroundImage from "../../components/background-screen.component";
import ButtonText from "../../components/button-text.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import MessageModal from "../../components/message-modal.component";
import CustomModal from "../../components/custom-modal.componet";

import styles from "./personal-info.styles";

const firebaseConfig = {
    apiKey: "AIzaSyA1akYjqm5cVgCJvcgAFVguS0sw70hv4ds",
    authDomain: "charitym-ambulance.firebaseapp.com",
    databaseURL: "https://charitym-ambulance.firebaseio.com",
    projectId: "charitym-ambulance",
    storageBucket: "charitym-ambulance.appspot.com",
    messagingSenderId: "801731513492",
    appId: "1:801731513492:web:30978d836981cb9b6d3881",
};

const PersonalInfoScreen = ({ navigation, currentUser, token, statusCode, updateUser }) => {
    const [linkImage, setLinkImage] = useState(currentUser.imageUrl);
    const [displayName, setDisplayName] = useState(currentUser.displayName);
    const [phone, setPhone] = useState(currentUser.phone);
    // const [phone, setPhone] = useState("");
    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationId] = useState(null);
    const [otp, setOtp] = useState(null);
    const [invalidOTP, setInvalidOTP] = useState(null);

    const handlerUploadImage = () => {
        // console.log(linkImage);
        // updateUser(currentUser.id, token, { displayName, phone, image });

        try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            phoneProvider.verifyPhoneNumber(`+84${phone.slice(1)}`, recaptchaVerifier.current).then(setVerificationId);
        } catch (error) {
            console.log(error);
        }
    };

    const confirmCode = async () => {
        try {
            const image = {
                uri: linkImage,
                name: linkImage.substring(linkImage.lastIndexOf("/") + 1),
                type: "image/png",
            };
            const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
            await firebase.auth().signInWithCredential(credential);
            // navigation.navigate("Home");
            updateUser(currentUser.id, token, { displayName, phone, image });
        } catch (error) {
            setInvalidOTP("Mã OTP không hợp lệ");
        }
    };

    return (
        <BackgroundImage>
            {statusCode && <MessageModal message={message[statusCode]} isMessage={statusCode < 400} />}
            <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig} />
            <CustomModal title="Xác thực OTP" visible={!!verificationId}>
                <Text style={styles.title}>Mã OTP *</Text>
                {invalidOTP && <Text style={styles.invalid}>{invalidOTP}</Text>}
                <TextInput style={styles.otp} onChangeText={(value) => setOtp(value)} />
                <View style={styles.groupAction}>
                    <TouchableOpacity onPress={() => setVerificationId(null)}>
                        <Text style={styles.button_otp}>Hủy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={confirmCode}>
                        <Text style={styles.button_otp}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </CustomModal>
            <View>
                <HeaderTileWithBackBtn textContent="Thông tin cá nhân" onPress={() => navigation.replace("Home")} />
            </View>
            <View style={styles.container_info}>
                <AvatarNameCol
                    linkImage={linkImage}
                    setLinkImage={setLinkImage}
                    textContent={currentUser.displayName}
                />
                <Text style={styles.joining_day_title}>Ngày tham gia</Text>
                <Text style={styles.joining_day}>{currentUser.dateCreated}</Text>
            </View>
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.container_text_input}>
                    <Text style={styles.label}>Tên *</Text>
                    <TextInput
                        style={styles.text_input}
                        defaultValue={displayName}
                        onChangeText={(value) => setDisplayName(value)}
                    />
                </View>
                <View style={styles.container_text_input}>
                    <Text style={styles.label}>Số điện thoại *</Text>
                    <TextInput
                        style={styles.text_input}
                        defaultValue={phone}
                        onChangeText={(value) => setPhone(value)}
                        keyboardType="numeric"
                    />
                </View>
            </KeyboardAvoiding>
            <View style={styles.container_button_save}>
                <ButtonText
                    textContent="Lưu"
                    styleText={styles.button_text}
                    styleButton={styles.button_size}
                    onPress={handlerUploadImage}
                />
                <Text style={styles.text_policy}>
                    * Các thông tin cá nhân được bảo mật theo chính sách, qui định của Nhà nước
                </Text>
            </View>
        </BackgroundImage>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    token: selectToken,
    statusCode: selectStatusCode,
});

const mapDispatchToProps = (dispatch) => ({
    updateUser: (userId, token, user) => dispatch(updateUser(userId, token, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);
