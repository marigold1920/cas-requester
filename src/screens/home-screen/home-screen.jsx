import React from "react";

import { Text, View, ImageBackground } from "react-native";
import BackgroundImage from "../../components/background-screen.component";
import ButtonImgBgr from "../../components/button-image-background.component";
import ButtonWithImage from "../../components/button-image.component";
import SearchBox from "../../components/searchbox-icon.component";

import styles from "./home-styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerBlock}>
          <ButtonWithImage
            buttonStyle={styles.headerButton_noBorder}
            styleImg={styles.headerProfile}
            imgSrc={require("../../../assets/icons/mock-avatar.png")}
          />
          <Text style={styles.headerText}>TiTi Is M3</Text>
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
              buttonStyle={styles.menu_Button_Left}
              styleImg={styles.menu_Img}
              imgSrc={require("../../../assets/icons/disease-profile.png")}
              title="Hồ sơ bệnh"
              content="Tài xế có thể giúp bạn tìm bệnh viện phù hợp"
              titleStyle={styles.menu_title}
              contentStyle={styles.menu_content}
              gotoScreen={() => navigation.navigate("Profile")}
            />
            <ButtonImgBgr
              buttonStyle={styles.menu_Button_Right}
              styleImg={styles.menu_Img}
              imgSrc={require("../../../assets/icons/find-car.png")}
              title="Tìm xe"
              content="Bạn cần đưa đến bệnh viện hoặc về nhà"
              titleStyle={styles.menu_title}
              contentStyle={styles.menu_content}
            />
          </View>
          <View style={styles.menuBlock_row}>
            <ButtonImgBgr
              buttonStyle={styles.menu_Button_Left}
              styleImg={styles.menu_Img}
              imgSrc={require("../../../assets/icons/history.png")}
              title="Lịch sử"
              content="Xem lịch sử gọi xe, gửi phản hồi về dịch vụ"
              titleStyle={styles.menu_title}
              contentStyle={styles.menu_content}
              gotoScreen={() => navigation.navigate("History")}
            />
            <ButtonImgBgr
              buttonStyle={styles.menu_Button_Right}
              styleImg={styles.menu_Img}
              imgSrc={require("../../../assets/icons/personal-info.png")}
              title="Thông tin cá nhân"
              content="Tài xế có thể giúp bạn tìm bệnh viện phù hợp"
              titleStyle={styles.menu_title}
              contentStyle={styles.menu_content}
            />
          </View>
        </View>
      </BackgroundImage>
    </View>
  );
};

export default HomeScreen;
