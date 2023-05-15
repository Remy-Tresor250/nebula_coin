import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

interface ButtonProps {
    circleButton: {
        imgUrl: string
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
      onPress={handlePress}
    ></TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>Rect button</Text>
    </View>
  );
};
