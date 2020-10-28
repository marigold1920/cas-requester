import React, { useState, useRef } from "react";
import { View } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import firebase from "../../firebase/firebase.utils";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
import BackgroundLogin from "../../components/background-screen-login.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./register.styles";

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState("+84931738872");
    const [password, setPassword] = useState("123");
    const [confirmPassword, setConfirmPassword] = useState("123");
    const [name, setName] = useState("Victor Nguyen");
    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationId] = useState(null);

    const handleRegister = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(username, recaptchaVerifier.current).then(setVerificationId);
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, "1234");
    };

    return (
        <BackgroundLogin>
            <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebase.app().options} />
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.block_logo_name}>
                    <LogoName />
                </View>
                <View style={styles.block_button}>
                    <TextInputIcon
                        onChangeText={value => setUsername(value)}
                        name="username"
                        imgSrc={require("../../../assets/icons/phone.png")}
                        placeholder="Số điện thoại"
                        keyboardType="numeric"
                        defaultValue={username}
                    />
                    <TextInputIcon
                        onChangeText={value => setPassword(value)}
                        name="password"
                        imgSrc={require("../../../assets/icons/key.png")}
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                        defaultValue={password}
                    />
                    <TextInputIcon
                        onChangeText={value => setConfirmPassword(value)}
                        name="confirmPassword"
                        imgSrc={require("../../../assets/icons/key.png")}
                        placeholder="Xác nhận mật khẩu"
                        secureTextEntry={true}
                        defaultValue={confirmPassword}
                    />
                    <TextInputIcon
                        onChangeText={value => setName(value)}
                        name="name"
                        imgSrc={require("../../../assets/icons/user.png")}
                        placeholder="Tên"
                        defaultValue={name}
                    />
                    <ButtonText
                        styleButton={{ paddingVertical: 5 }}
                        textContent="TẠO TÀI KHOẢN"
                        onPress={handleRegister}
                    />
                    <TextLinking
                        contentText="Đã có tài khoản?"
                        contentLink="Đăng nhập"
                        link={() => navigation.navigate("Login")}
                    />
                </View>
            </KeyboardAvoiding>
        </BackgroundLogin>
    );
};

export default RegisterScreen;
