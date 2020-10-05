import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonWithImage = (props) => {
  return (
    <TouchableOpacity style={props.buttonStyle}>
      <Image source={props.imgSrc} style={props.styleImg} />
    </TouchableOpacity>
  );
};

export default ButtonWithImage;
