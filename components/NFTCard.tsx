import React from "react";
import { Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton } from "./Button";
import {
  NFTtitle,
  SubInfo,
  People,
  EndDate,
  ImageCmp,
  EthPrice,
} from "./SubInfo";

const NFTCard = ({ data }: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250, position: "relative" }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <View style={{ position: "absolute", right: 54, top: 10 }}>
          <CircleButton imgUrl={assets.heart} handlePress={navigation} />
        </View>
      </View>
      <SubInfo />
    </View>
  );
};

export default NFTCard;
