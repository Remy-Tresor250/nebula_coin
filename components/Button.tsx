import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

interface ButtonProps {
    circleButton: {
        imgUrl: any
        handlePress: any
    }
}

export const CircleButton = ({imgUrl, handlePress, ...props}: ButtonProps["circleButton"]) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props
      }}
      onPress={() => handlePress()}
    >
      <Image source={imgUrl} resizeMode="contain" style={{width: 24, height: 24}}/>
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>Rect button</Text>
    </View>
  );
};
