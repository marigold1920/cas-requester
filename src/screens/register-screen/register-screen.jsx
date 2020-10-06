import React from "react";

import { View, ImageBackground } from "react-native";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";

import styles from "./register-styles";
const RegisterScreen = ({ navigation }) => {
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
          <TextInputIcon
            imgSrc={require("../../../assets/icons/user.png")}
            placeholder="Tên"
          />
          <ButtonText
            textContent="Tạo tài khoản"
            gotoScreen={() => navigation.navigate("Login")}
          />
          <TextLinking
            contentText="Đã có tài khoản?"
            contentLink="Đăng nhập"
            link={() => navigation.navigate("Login")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
