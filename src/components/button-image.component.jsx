import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonWithImage = ({ imgSrc, buttonStyle, onPress, styleImg }) => {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Image source={imgSrc} style={styleImg} />
        </TouchableOpacity>
    );
};

export default ButtonWithImage;
