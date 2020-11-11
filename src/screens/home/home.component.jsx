import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { logout } from "../../redux/user/user.actions";
import { findNearestDrivers } from "../../redux/geofirestore/geofirestore.actions";
import { findNearest } from "../../firebase/firebase.utils";

import BackgroundImage from "../../components/background-screen.component";
import ButtonImgBgr from "../../components/button-image-background.component";
import ButtonWithImage from "../../components/button-image.component";
import SearchBox from "../../components/searchbox-icon.component";
import KeyboardAvoiding from "../../components/keyboard-avoiding.component";

import styles from "./home.styles";

const HomeScreen = ({ navigation, currentUser, logout, findNearestDrivers }) => {
    useEffect(() => {
        !currentUser && navigation.navigate("Login");
        if (currentUser) {
            const drivers = findNearest(10.16494, 106.61501);
            // findNearestDrivers(drivers);
        }
    }, [currentUser]);

    const handleLogout = () => {
        logout();
    };

    return (
        <BackgroundImage>
            <KeyboardAvoiding conatainerStyle={{ flex: 1 }} style={styles.container}>
                <View style={styles.headerBlock}>
                    <ButtonWithImage
                        buttonStyle={styles.headerButton_noBorder}
                        styleImg={styles.headerProfile}
                        imgSrc={{
                            uri: currentUser
                                ? currentUser.imageUrl
                                : "https://i.ibb.co/G3KybLH/loading.png"
                        }}
                        onPress={() => navigation.navigate("PersonalInfo")}
                    />
                    <Text style={styles.headerText}>
                        {currentUser ? currentUser.displayName : ""}
                    </Text>
                    <ButtonWithImage
                        buttonStyle={styles.headerButton}
                        styleImg={styles.headerImg}
                        imgSrc={require("../../../assets/icons/sign-out.png")}
                        onPress={handleLogout}
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
                            onPress={() => navigation.navigate("FindAmbulance")}
                        />
                        <ButtonImgBgr
                            styleImg={styles.menu_Img}
                            imgSrc={require("../../../assets/icons/disease-profile.png")}
                            title="Hồ sơ sức khỏe"
                            content="Cập nhật thông tin về tình trạng sức khỏe của bạn"
                            titleStyle={styles.menu_title}
                            contentStyle={styles.menu_content}
                            onPress={() => navigation.navigate("Profile")}
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
                            onPress={() => navigation.navigate("History")}
                        />
                        <ButtonImgBgr
                            styleImg={styles.menu_Img}
                            imgSrc={require("../../../assets/icons/personal-info.png")}
                            title="Thông tin cá nhân"
                            content="Có thể giúp tài xế dễ dàng liên lạc với bạn khi gửi yêu cầu"
                            titleStyle={styles.menu_title}
                            contentStyle={styles.menu_content}
                            onPress={() => navigation.navigate("PersonalInfo")}
                        />
                    </View>
                </View>
            </KeyboardAvoiding>
        </BackgroundImage>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    findNearestDrivers: drivers => dispatch(findNearestDrivers(drivers))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
