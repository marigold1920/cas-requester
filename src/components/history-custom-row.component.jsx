import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import getDistance from "geolib/es/getDistance";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Rating } from "react-native-ratings";

import RequestInfoItem from "./request-info-item.component";

const HistoryItem = ({ label, content }) => (
    <>
        <Text style={styles.infoTitle}>{label}</Text>
        <RequestInfoItem content={content} />
    </>
);

const HistoryComponent = ({
    pickUp,
    destination,
    isEmergency,
    isOther,
    request_status,
    patientName,
    patientPhone,
    driver,
    ambulance,
    morbidity,
    morbidityNote,
    feedbackDriver,
    ratingDriver,
    ratingService,
    feedbackService,
    reason,
    createdDate,
    createdTime,
    navigation,
    requestId
}) => {
    const viewStateIcon = {
        false: require("../../assets/icons/details.png"),
        true: require("../../assets/icons/less.png")
    };
    const mapStatus = {
        SUCCESS: { title: "Thành công", color: "#07a33d" },
        FAIL: { title: "Không hoàn thành", color: "#ff0000" },
        CANCELED: { title: "Đã hủy bỏ", color: "#ff0000" },
        PROCESSING: { title: "Đang xử lí", color: "#6ad4d2" }
    };
    const [viewState, setViewState] = useState(false);
    const [isFeedback, setIsFeedback] = useState(false);

    useEffect(() => {
        const current = new Date().toISOString();
        const start = `${createdDate}T${createdTime}Z`;
        const diff =
            (25200 - (new Date(start).getTime() - new Date(current).getTime()) / 1000) / 3600;

        setIsFeedback(request_status === "SUCCESS" && !ratingDriver && Math.floor(diff) < 24);
    }, []);

    return (
        <View style={styles.container}>
            {isFeedback && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.feedbackWarning}>Yêu cầu chưa được phản hồi!</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Feedback", { requestId })}
                    >
                        <Text style={styles.feedbackAction}>Đánh giá ngay</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={styles.overview}>
                <View style={[styles.overviewItem, { flexBasis: "28%", marginRight: 30 }]}>
                    <Text style={styles.title}>Điểm đón:</Text>
                    <Text style={[styles.title, { fontSize: 9 }]}>
                        {pickUp.date ? `${pickUp.time} ${pickUp.date}` : "......"}
                    </Text>
                    <View style={styles.requestType}>
                        <Icon size={14} color="#333" name="taxi" />
                        <Text
                            style={[
                                styles.requestTypeValue,
                                !isEmergency && { backgroundColor: "#09acfe" }
                            ]}
                        >
                            {isEmergency ? "Đến bệnh viện" : "Đi về nhà"}
                        </Text>
                    </View>
                </View>
                <View style={[styles.overviewItem, { flexBasis: "40%" }]}>
                    <Text style={styles.title}>Điểm đến:</Text>
                    <Text style={[styles.title, { fontSize: 9 }]}>
                        {destination.date ? `${destination.time} ${destination.date}` : "......"}
                    </Text>
                    <View style={styles.requestType}>
                        <Icon size={14} color="#333" name="street-view" />
                        <Text
                            style={[
                                styles.requestTypeValue,
                                { backgroundColor: mapStatus[request_status].color }
                            ]}
                        >
                            {mapStatus[request_status].title}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                    <Text style={styles.title}>Lộ trình:</Text>
                    <View style={styles.distance}>
                        <Text style={styles.distanceValue}>
                            {(
                                getDistance(
                                    { latitude: pickUp.latitude, longitude: pickUp.longitude },
                                    {
                                        latitude: destination.latitude,
                                        longitude: destination.longitude
                                    }
                                ) / 1000
                            ).toFixed(1)}
                        </Text>
                        <Text style={styles.distanceUnit}>km</Text>
                    </View>
                </View>
            </View>
            <View style={styles.locationOverview}>
                <View style={styles.iconContainer}>
                    <Icon size={18} color="#09acfe" name="chevron-circle-up" />
                    <Icon size={12} color="#555" name="ellipsis-v" />
                    <Icon size={12} color="#555" name="ellipsis-v" />
                    <Icon size={18} color="#f9650c" name="chevron-circle-down" />
                </View>
                <View>
                    <View style={[styles.location, { marginBottom: 10 }]}>
                        <Text style={styles.name}>{pickUp.name}</Text>
                        <Text style={styles.address}>{pickUp.address}</Text>
                    </View>
                    <View style={styles.location}>
                        <Text style={styles.name}>{destination.name}</Text>
                        <Text style={styles.address}>{destination.address}</Text>
                    </View>
                </View>
            </View>
            {viewState && (
                <>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        {driver && (
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.infoTitle}>Thông tin tài xế</Text>
                                <RequestInfoItem content={driver.displayName} icon="user-clock" />
                                <RequestInfoItem
                                    content={ambulance.licensePlate}
                                    icon="ambulance"
                                />
                            </View>
                        )}
                        {isOther && (
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.infoTitle}>Thông tin người bệnh</Text>
                                <RequestInfoItem
                                    content={patientName || "Không có thông tin"}
                                    icon="user-injured"
                                />
                                <RequestInfoItem
                                    content={patientPhone || "Không có thông tin"}
                                    icon="old-phone"
                                    enabledNormalIcon
                                />
                            </View>
                        )}
                    </View>
                    {morbidity && <HistoryItem label="Tình trạng" content={morbidity} />}
                    {morbidityNote && <HistoryItem label="Ghi chú" content={morbidityNote} />}
                    {reason && <HistoryItem label="Yêu cầu không hoàn thành do" content={reason} />}
                    {(ratingDriver || feedbackDriver) && (
                        <View style={{ alignItems: "flex-start" }}>
                            <Text style={styles.infoTitle}>Đánh giá tài xế</Text>
                            <Rating
                                type="heart"
                                imageSize={12}
                                fractions={1}
                                readonly
                                startingValue={ratingDriver}
                            />
                            <RequestInfoItem
                                content={feedbackDriver || "Không có đánh giá về tài xế"}
                            />
                        </View>
                    )}
                    {(ratingService || feedbackService) && (
                        <View style={{ alignItems: "flex-start" }}>
                            <Text style={styles.infoTitle}>Đánh giá dịch vụ</Text>
                            <Rating
                                type="heart"
                                imageSize={12}
                                fractions={1}
                                readonly
                                startingValue={ratingService}
                            />
                            <RequestInfoItem
                                content={feedbackService || "Không có đánh giá về dịch vụ"}
                            />
                        </View>
                    )}
                </>
            )}
            <TouchableOpacity
                onPress={() => setViewState(!viewState)}
                style={{ alignItems: "center", marginTop: 8 }}
            >
                <Image style={styles.more} source={viewStateIcon[viewState]} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};

export default HistoryComponent;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#b3b9c8",
        marginVertical: 5
    },
    locationOverview: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10
    },
    location: {
        width: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    name: {
        color: "#26324a",
        fontFamily: "Texgyreadventor-bold"
    },
    address: {
        fontSize: 10,
        color: "#6c7fa6",
        marginBottom: 5,
        fontFamily: "Texgyreadventor-bold"
    },
    overview: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 5
    },
    overviewItem: {
        justifyContent: "flex-start"
    },
    title: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 11,
        color: "#6c7fa6"
    },
    distance: {
        flexDirection: "row",
        alignItems: "flex-end",
        height: 35
    },
    distanceValue: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 23
    },
    distanceUnit: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 12,
        lineHeight: 26,
        color: "#333"
    },
    requestType: {
        flexDirection: "row",
        alignItems: "center"
    },
    feedback: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 10
    },
    requestTypeValue: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 10,
        marginLeft: 2,
        backgroundColor: "#ff9d00",
        color: "#fff",
        paddingHorizontal: 8,
        borderRadius: 8
    },
    infoTitle: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 12,
        color: "#6c7fa6",
        marginTop: 5
    },
    more: {
        width: 55,
        height: 9
    },
    feedbackWarning: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 10,
        color: "#6c7fa6"
    },
    feedbackAction: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 12,
        marginLeft: 10,
        color: "#0132f5"
    }
});
