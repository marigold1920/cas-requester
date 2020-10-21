import React from "react";
import { Text, View } from "react-native";

import BackgroundImage from "../../components/background-screen.component";
import ButtonImgBgr from "../../components/button-image-background.component";
import ButtonWithImage from "../../components/button-image.component";
import SearchBox from "../../components/searchbox-icon.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./home.styles";

const HomeScreen = ({ navigation }) => {
    return (
        <BackgroundImage>
            <KeyboardAvoiding style={styles.container}>
                <View style={styles.headerBlock}>
                    <ButtonWithImage
                        buttonStyle={styles.headerButton_noBorder}
                        styleImg={styles.headerProfile}
                        imgSrc={require("../../../assets/icons/mock-avatar.png")}
                        gotoScreen={() => navigation.navigate("PersonalInfo")}
                    />
                    <Text style={styles.headerText}>Tín Trần</Text>
                    <ButtonWithImage
                        buttonStyle={styles.headerButton}
                        styleImg={styles.headerImg}
                        imgSrc={require("../../../assets/icons/notification.png")}
                    />
                    <ButtonWithImage
                        buttonStyle={styles.headerButton}
                        styleImg={styles.headerImg}
                        imgSrc={require("../../../assets/icons/sign-out.png")}
                        gotoScreen={() => navigation.navigate("Login")}
                    />
                </View>
                <View style={styles.searchBlock}>
                    <SearchBox placeholder="Tìm kiếm bệnh viện" />
                </View>
                <View style={styles.menuBlock_column}>
                    <View style={styles.menuBlock_row}>
                        <ButtonImgBgr
                            styleImg={styles.menu_Img}
                            imgSrc={require("../../../assets/icons/find-car.png")}
                            title="Tìm xe"
                            content="Tài xế sẽ giúp bạn đến bệnh viện hoặc về nhà"
                            titleStyle={styles.menu_title}
                            contentStyle={styles.menu_content}
                            gotoScreen={() => navigation.navigate("FindCar")}
                        />
                        <ButtonImgBgr
                            styleImg={styles.menu_Img}
                            imgSrc={require("../../../assets/icons/disease-profile.png")}
                            title="Hồ sơ sức khỏe"
                            content="Cập nhật thông tin về sức khỏe hiện tại của bạn"
                            titleStyle={styles.menu_title}
                            contentStyle={styles.menu_content}
                            gotoScreen={() => navigation.navigate("Profile")}
                        />
                    </View>
                    <View style={styles.menuBlock_row}>
                        <ButtonImgBgr
                            styleImg={styles.menu_Img}
                            imgSrc={require("../../../assets/icons/history.png")}
                            title="Lịch sử"
                            content="Xem lịch sử gọi xe và gửi phản hồi về dịch vụ"
                            titleStyle={styles.menu_title}
                            contentStyle={styles.menu_content}
                            gotoScreen={() => navigation.navigate("History")}
                        />
                        <ButtonImgBgr
                            styleImg={styles.menu_Img}
                            imgSrc={require("../../../assets/icons/personal-info.png")}
                            title="Thông tin cá nhân"
                            content="Có thể giúp tài xế dễ dàng liên lạc với bạn khi gửi yêu cầu"
                            titleStyle={styles.menu_title}
                            contentStyle={styles.menu_content}
                            gotoScreen={() => navigation.navigate("PersonalInfo")}
                        />
                    </View>
                </View>
            </KeyboardAvoiding>
        </BackgroundImage>
    );
};

export default HomeScreen;
