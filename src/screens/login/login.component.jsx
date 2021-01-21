import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { signIn } from "../../redux/user/user.actions";
import { message } from "../../utils/message.data";
import { selectStatusCode } from "../../redux/message/message.selectors";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
import BackgroundLogin from "../../components/background-screen-login.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";
import MessageModal from "../../components/message-modal.component";
import Spinner from "../../components/spinner.component";

import styles from "./login.styles";

const LoginScreen = ({ navigation, statusCode, signIn }) => {
    const [username, setUsername] = useState("0988635032");
    const [password, setPassword] = useState("123456");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        statusCode && setLoading(false);
    }, [statusCode]);

    return (
        <BackgroundLogin>
            {loading && <Spinner />}
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
                        styleButton={{ paddingVertical: 3, width: "100%" }}
                        textContent="ĐĂNG NHẬP"
                        onPress={() => {
                            signIn({ username, password });
                            setLoading(true);
                        }}
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
    statusCode: selectStatusCode
});

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
