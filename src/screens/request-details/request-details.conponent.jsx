import React from "react";
import { View, Text, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

import Place from "../../components/place.component";
import FeedbackShow from "../../components/feedback-show.component";

import styles from "./request-details.styles";

const pickUp = {
    name: "Vị trí của bạn",
    address: "1141/15/7, Lê Công, Gò Vấp",
    date: "20/07/2020",
    time: "10:20",
};

const destination = {
    name: "Bệnh viện Quân Y",
    address: "365 Lê Văn Việt, Q.9, Tp. HCM",
    date: "20/07/2020",
    time: "12:20",
};

const RequestDetails = ({ navigation, isFeedback = true }) => (
    <View style={styles.container}>
        <View style={styles.driverInfo}>
            <Image
                style={styles.background}
                source={require("../../../assets/images/request-details-bg.png")}
            />
            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={require("../../../assets/images/person-3.jpg")}
                />
                <Text style={styles.name}>Victor Nguyen</Text>
                <Text style={styles.licensePlate}>71 - C1 852.23</Text>
                <Text style={styles.phone}>0931738872</Text>
            </View>
            <Text style={styles.status}>Thành công</Text>
        </View>
        <View style={[styles.details, isFeedback ? { height: "53%" } : null]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Place
                    placeName="Điểm đón"
                    place={pickUp}
                    icon="https://i.ibb.co/D8HPk12/placeholder.png"
                />
                <Place
                    placeName="Điểm đến"
                    place={destination}
                    icon="https://i.ibb.co/gWdQ69d/radar.png"
                />
                {isFeedback ? (
                    <>
                        <FeedbackShow
                            title="Đánh giá tài xế"
                            content="Bác chạy rất có tâm, hỗ trợ sơ cứu dọc đường nữa"
                            level={5}
                            size={12}
                        />
                        <FeedbackShow
                            title="Đánh giá dịch vụ"
                            content="Tìm tài xế cũng khá nhanh, nhưng layout cần điều chỉnh cho thiết bị màn hình nhỏ"
                            level={4}
                            size={12}
                        />
                    </>
                ) : null}
                <FeedbackShow
                    title="Tình trạng bệnh"
                    content="Chân bị phù nặng do nhiễm trùng máu, hôn mê sâu, khá nguy kịch"
                />
                <FeedbackShow
                    title="Ghi chú"
                    content="Bệnh nhân không có giấy tờ tùy thân"
                />
            </ScrollView>
        </View>
        {!isFeedback ? (
            <Text
                onPress={() => navigation.navigate("Feedback")}
                style={styles.action}
            >
                Đánh giá dịch vụ
            </Text>
        ) : null}
    </View>
);

export default withNavigation(RequestDetails);
