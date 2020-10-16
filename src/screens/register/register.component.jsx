import React from "react";
import { View } from "react-native";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
import BackgroundLogin from "../../components/background-screen-login.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./register.styles";

const RegisterScreen = ({ navigation }) => {
    return (
        <BackgroundLogin>
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.block_logo_name}>
                    <LogoName />
                </View>
                <View style={styles.block_button}>
                    <TextInputIcon imgSrc={require("../../../assets/icons/phone.png")} placeholder="Số điện thoại" />
                    <TextInputIcon imgSrc={require("../../../assets/icons/key.png")} placeholder="Mật khẩu" />
                    <TextInputIcon imgSrc={require("../../../assets/icons/key.png")} placeholder="Xác nhận mật khẩu" />
                    <TextInputIcon imgSrc={require("../../../assets/icons/user.png")} placeholder="Tên" />
                    <ButtonText
                        styleButton={{ paddingVertical: 5 }}
                        textContent="TẠO TÀI KHOẢN"
                        gotoScreen={() => navigation.navigate("Otp")}
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
