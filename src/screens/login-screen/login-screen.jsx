import React from "react";

import { Text, View, TextInput, ImageBackground, Image } from "react-native";

import styles from "./login-styles";
import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
const LoginScreen = ({ props, navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/icons/background-login.png")}
        style={styles.background_image}
      >
        <View style={styles.block_logo_name}>
          <LogoName />
        </View>
        <View style={styles.block_button}>
          <TextInputIcon
            imgSrc={require("../../../assets/icons/phone.png")}
            placeholder="Số điện thoại"
          />
          <TextInputIcon
            imgSrc={require("../../../assets/icons/key.png")}
            placeholder="Mật khẩu"
          />
          <ButtonText
            textContent="Đăng nhập"
            gotoScreen={() => navigation.navigate("Home")}
          />
          <TextLinking
            contentText="Chưa có tài khoản?"
            contentLink="Đăng ký"
            link={() => navigation.navigate("Home")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
