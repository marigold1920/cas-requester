import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonImgBgr = (props) => {
  return (
    <TouchableOpacity style={props.buttonStyle} onPress={props.gotoScreen}>
      <ImageBackground source={props.imgSrc} style={props.styleImg}>
        <Text style={props.titleStyle}>{props.title}</Text>
        <Text style={props.contentStyle}>{props.content}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default ButtonImgBgr;
