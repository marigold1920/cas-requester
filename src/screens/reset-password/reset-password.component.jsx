import React from "react";

import { View } from "react-native";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
import BackgroundLogin from "../../components/background-screen-login.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./reset-password.styles";

const ResetPassScreen = ({ navigation }) => {
    return (
        <BackgroundLogin>
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.block_logo_name}>
                    <LogoName />
                </View>
                <View style={styles.block_button}>
                    <TextInputIcon placeholder="Số điện thoại" />
                    <TextInputIcon placeholder="Mật khẩu" />
                    <TextInputIcon placeholder="Xác nhận mật khẩu" />
                    <ButtonText
                        styleButton={{ paddingVertical: 5 }}
                        textContent="Gửi mã OTP"
                        onPress={() => navigation.navigate("Otp")}
                    />
                    <TextLinking
                        contentText="Chưa có tài khoản?"
                        contentLink="Đăng ký"
                        link={() => navigation.navigate("Register")}
                    />
                </View>
            </KeyboardAvoiding>
        </BackgroundLogin>
    );
};

export default ResetPassScreen;
