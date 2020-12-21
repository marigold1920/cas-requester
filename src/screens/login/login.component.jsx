import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { signIn } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { message } from "../../utils/message.data";
import { selectStatusCode } from "../../redux/message/message.selectors";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
import BackgroundLogin from "../../components/background-screen-login.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import MessageModal from "../../components/message-modal.component";

import styles from "./login.styles";

const LoginScreen = ({ navigation, currentUser, statusCode, signIn }) => {
    const [username, setUsername] = useState("0988635032");
    const [password, setPassword] = useState("123");

    useEffect(() => {
        currentUser && navigation.navigate("Home");
    }, [currentUser]);

    return (
        <BackgroundLogin>
            {statusCode && <MessageModal message={message[401]} />}
            <KeyboardAvoiding conatainerStyle={{ flex: 1 }} style={styles.container}>
                <View style={styles.block_logo_name}>
                    <LogoName />
                </View>
                <View style={styles.block_button}>
                    <TextInputIcon
                        defaultValue={username}
                        onChangeText={value => setUsername(value)}
                        imgSrc={require("../../../assets/icons/phone.png")}
                        placeholder="Số điện thoại"
                        keyboardType="numeric"
                    />
                    <TextInputIcon
                        defaultValue={password}
                        onChangeText={value => setPassword(value)}
                        imgSrc={require("../../../assets/icons/key.png")}
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                    />
                    <ButtonText
                        styleButton={{ paddingVertical: 5 }}
                        textContent="ĐĂNG NHẬP"
                        onPress={() => signIn({ username, password })}
                    />
                    <TextLinking
                        contentText="Chưa có tài khoản?"
                        contentLink="Đăng ký"
                        link={() => navigation.navigate("Register")}
                    />
                    <TextLinking
                        contentLink="Quên mật khẩu?"
                        link={() => navigation.navigate("ResetPass")}
                    />
                </View>
            </KeyboardAvoiding>
        </BackgroundLogin>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    statusCode: selectStatusCode
});

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
