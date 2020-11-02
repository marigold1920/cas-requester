import React, {useEffect, useState} from "react";
import * as ImagePicker from 'expo-image-picker';
import { Text, View, Image, StyleSheet, Platform, TouchableHighlight } from "react-native";
import rem from "./constant.unit";
import * as FileSystem from 'expo-file-system';

const AvatarNameCol = ({ linkImage, setLinkImage, setImageDecodeBase64, textContent, contStyle, imgStyle, textStyle }) => {
    const { container, image, text } = styles;
    const combineStylesContainer = StyleSheet.flatten([container, contStyle]);
    const combineStylesImage = StyleSheet.flatten([image, imgStyle]);
    const combineStylesText = StyleSheet.flatten([text, textStyle]);
    // StyleSheet.flatten giúp thay đổi bất cứ thuộc tính nào của container, nếu không thay đổi sẽ áp dụng thuộc tính default

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result.uri);

        if (!result.cancelled) {
            //File anh
            const base64 = await FileSystem.EncodingType.Base64(result.uri);
            const arrBuffer = decode(base64);
            setImageDecodeBase64(arrBuffer);
            setLinkImage(result.uri);

        }
    };

    return (
        <View style={combineStylesContainer}>
            <TouchableHighlight onPress={pickImage}>
                <Image style={combineStylesImage} source={{ uri: linkImage }} />
            </TouchableHighlight>
            <Text style={combineStylesText}>{textContent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    image: {
        width: 11 * rem,
        height: 11 * rem,
        borderRadius: 100,
        marginBottom: 10
    },
    text: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 22,
        color: "#494958"
    }
});

export default AvatarNameCol;
