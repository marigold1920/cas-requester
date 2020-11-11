import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Rating = ({ level, size, setLevel }) => (
    <View style={styles.rating}>
        <View onPress={() => setLevel(1)}>
            <Image
                style={{ width: size, height: size, marginHorizontal: 2 }}
                source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }}
            />
        </View>
        {level >= 2 ? (
            <View onPress={() => setLevel(2)}>
                <Image
                    style={{ width: size, height: size, marginHorizontal: 2 }}
                    source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }}
                />
            </View>
        ) : null}
        {level >= 3 ? (
            <View onPress={() => setLevel(3)}>
                <Image
                    style={{ width: size, height: size, marginHorizontal: 2 }}
                    source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }}
                />
            </View>
        ) : null}
        {level >= 4 ? (
            <View onPress={() => setLevel(4)}>
                <Image
                    style={{ width: size, height: size, marginHorizontal: 2 }}
                    source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }}
                />
            </View>
        ) : null}
        {level == 5 ? (
            <View onPress={() => setLevel(5)}>
                <Image
                    style={{ width: size, height: size, marginHorizontal: 2 }}
                    source={{ uri: "https://i.ibb.co/DR4mTc0/heart.png" }}
                />
            </View>
        ) : null}
    </View>
);

export default Rating;

const styles = StyleSheet.create({
    rating: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 5
    }
});
