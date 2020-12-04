import React, { useState } from "react";

import { View } from "react-native";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
import BackgroundLogin from "../../components/background-screen-login.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./reset-password.styles";

const ResetPassScreen = ({ navigation }) => {

    const [username, setUsername] = useState("+84359680538");
    const [password, setPassword] = useState("3333");
    const [confirmPassword, setConfirmPassword] = useState("3333");

    return (
        <BackgroundLogin>
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.block_logo_name}>
                    <LogoName />
                </View>
                <View style={styles.block_button}>
                    <TextInputIcon
                        onChangeText={value => setUsername(value)} 
                        placeholder="Số điện thoại" 
                        defaultValue={username}/>
                    <TextInputIcon 
                        onChangeText={value => setPassword(value)}
                        placeholder="Mật khẩu" 
                        defaultValue={password}/>
                    <TextInputIcon 
                        onChangeText={value => setConfirmPassword(value)}
                        placeholder="Xác nhận mật khẩu" 
                        defaultValue={confirmPassword}/>
                    <ButtonText
                        styleButton={{ paddingVertical: 5 }}
                        textContent="Gửi mã OTP"
                        onPress={() => navigation.navigate("Otp2")}
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
