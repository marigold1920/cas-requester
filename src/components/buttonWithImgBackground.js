import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonImgBgr = (props) => {
  return (
    <View>
      <TouchableOpacity style={props.buttonStyle}>
        <ImageBackground source={props.imgSrc} style={props.styleImg}>
          <Text style={props.titleStyle}>{props.title}</Text>
          <Text style={props.contentStyle}>{props.content}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonImgBgr;
