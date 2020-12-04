import React, { useState, useRef }  from "react";
import firebase from "../../firebase/firebase.utils";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { View } from "react-native";

import TextInputIcon from "../../components/text-input-with-icon.component";
import ButtonText from "../../components/button-text.component";
import TextLinking from "../../components/text-linking.component";
import LogoName from "../../components/logo-name.component";
import BackgroundLogin from "../../components/background-screen-login.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./otp.styles";

const OtpScreen = ({ navigation }) => {

    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationId] = useState(null);
    const [message, showMessage] = useState('');
    const handleConfirm = async () => {
        console.log('Helloooo');
        try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
              "0359680538",
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
              text: 'Verification code has been sent to your phone.',
            });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, "1234");
    };

    return (
        <BackgroundLogin>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebase.app().options}
            />
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.block_logo_name}>
                    <LogoName />
                </View>
                <View style={styles.block_button}>
                    <TextInputIcon
                         imgSrc={require("../../../assets/icons/otp-icon.png")} 
                        placeholder="Nhập mã OTP" />
                    <ButtonText
                        styleButton={{ paddingVertical: 5 }}
                        textContent="XÁC NHẬN"
                        onPress={handleConfirm}
                    />
                    <TextLinking
                        contentText="Chưa nhận được mã OTP?"
                        contentLink="Gửi lại mã"
                        link={() => navigation.navigate("Register")}
                    />
                </View>
            </KeyboardAvoiding>
        </BackgroundLogin>
    );
};

export default OtpScreen;
