import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";

import { selectCurrentUser, selectToken } from "../../redux/user/user.selectors";
import { cleanUp } from "../../redux/request/request.actions";
import { selectStatusCode } from "../../redux/message/message.selectors";
import { updateUser, logout } from "../../redux/user/user.actions";
import { message } from "../../utils/message.data";

import AvatarNameCol from "../../components/avatar-name-column.component";
import HeaderTileWithBackBtn from "../../components/header-title-back-arrow.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import MessageModal from "../../components/message-modal.component";
import CustomModal from "../../components/custom-modal.componet";
import Spinner from "../../components/spinner.component";

import styles from "./personal-info.styles";

const firebaseConfig = {
    apiKey: "AIzaSyA1akYjqm5cVgCJvcgAFVguS0sw70hv4ds",
    authDomain: "charitym-ambulance.firebaseapp.com",
    databaseURL: "https://charitym-ambulance.firebaseio.com",
    projectId: "charitym-ambulance",
    storageBucket: "charitym-ambulance.appspot.com",
    messagingSenderId: "801731513492",
    appId: "1:801731513492:web:30978d836981cb9b6d3881"
};

const PersonalInfoScreen = ({
    navigation,
    currentUser,
    token,
    statusCode,
    updateUser,
    logout,
    cleanUp
}) => {
    const [linkImage, setLinkImage] = useState(currentUser.imageUrl);
    const [displayName, setDisplayName] = useState(currentUser.displayName);
    const [phone, setPhone] = useState(currentUser.phone);
    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationId] = useState(null);
    const [otp, setOtp] = useState(null);
    const [invalidOTP, setInvalidOTP] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        statusCode && setLoading(false);
    }, [statusCode]);

    const handleUpdate = () => {
        if (phone !== currentUser.phone) {
            try {
                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                phoneProvider
                    .verifyPhoneNumber(`+84${phone.slice(1)}`, recaptchaVerifier.current)
                    .then(setVerificationId);
            } catch (error) {
                console.log(error);
            }
        } else {
            updateUserProfile();
        }
    };

    const confirmCode = async () => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
            await firebase.auth().signInWithCredential(credential);
            updateUserProfile();
        } catch (error) {
            setInvalidOTP("Mã OTP không hợp lệ");
        }
    };

    const updateUserProfile = () => {
        setLoading(true);
        const image =
            linkImage === currentUser.imageUrl
                ? {
                      uri: linkImage,
                      name: linkImage.substring(linkImage.lastIndexOf("/") + 1),
                      type: "image/png"
                  }
                : linkImage;
        updateUser(currentUser.id, token, { displayName, phone, image });
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            {loading && <Spinner />}
            {statusCode && (
                <MessageModal message={message[statusCode]} isMessage={statusCode < 400} />
            )}
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <CustomModal title="Xác thực OTP" visible={!!verificationId}>
                <Text style={styles.title}>Mã OTP *</Text>
                {invalidOTP && <Text style={styles.invalid}>{invalidOTP}</Text>}
                <TextInput
                    keyboardType="numeric"
                    style={styles.otp}
                    onChangeText={value => setOtp(value)}
                />
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
                <HeaderTileWithBackBtn
                    textContent="Thông tin cá nhân"
                    onPress={() => navigation.replace("Home")}
                />
            </View>
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.container_info}>
                    <AvatarNameCol
                        linkImage={linkImage}
                        setLinkImage={setLinkImage}
                        textContent={currentUser.displayName}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            logout();
                            cleanUp();
                        }}
                    >
                        <Text style={styles.logout}>Đăng xuất</Text>
                    </TouchableOpacity>
                    <Text style={styles.joining_day_title}>Ngày tham gia</Text>
                    <Text style={styles.joining_day}>
                        {new Date(currentUser.dateCreated).toLocaleDateString("en-EN")}
                    </Text>
                </View>
                <View style={styles.container_text_input}>
                    <Text style={styles.label}>Tên *</Text>
                    <TextInput
                        style={styles.text_input}
                        defaultValue={displayName}
                        onChangeText={value => setDisplayName(value)}
                    />
                </View>
                <View style={styles.container_text_input}>
                    <Text style={styles.label}>Số điện thoại *</Text>
                    <TextInput
                        style={styles.text_input}
                        defaultValue={phone}
                        onChangeText={value => setPhone(value)}
                        keyboardType="numeric"
                    />
                </View>
            </KeyboardAvoiding>
            <TouchableOpacity onPress={handleUpdate}>
                <Text style={styles.action}>Lưu thay đổi</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    token: selectToken,
    statusCode: selectStatusCode
});

const mapDispatchToProps = dispatch => ({
    updateUser: (userId, token, user) => dispatch(updateUser(userId, token, user)),
    logout: () => dispatch(logout()),
    cleanUp: () => dispatch(cleanUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);
