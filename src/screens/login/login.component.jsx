import React from "react";

import { View } from "react-native";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
import BackgroundLogin from "../../components/background-screen-login.component";

import styles from "./login.styles";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

const LoginScreen = ({ navigation }) => {
    return (
        <BackgroundLogin>
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.block_logo_name}>
                    <LogoName />
                </View>
                <View style={styles.block_button}>
                    <TextInputIcon imgSrc={require("../../../assets/icons/phone.png")} placeholder="Số điện thoại" />
                    <TextInputIcon imgSrc={require("../../../assets/icons/key.png")} placeholder="Mật khẩu" />
                    <ButtonText
                        styleButton={{ paddingVertical: 5 }}
                        textContent="ĐĂNG NHẬP"
                        gotoScreen={() => navigation.navigate("Home")}
                    />
                    <TextLinking
                        contentText="Chưa có tài khoản?"
                        contentLink="Đăng ký"
                        link={() => navigation.navigate("Register")}
                    />
                    <TextLinking contentLink="Quên mật khẩu?" link={() => navigation.navigate("ResetPass")} />
                </View>
            </KeyboardAvoiding>
        </BackgroundLogin>
    );
};

export default LoginScreen;