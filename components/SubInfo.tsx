import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTtitle = () => {
  return (
    <View>
      <Text>NFT TILTE</Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>NFT TILTE</Text>
    </View>
  );
};

export const ImageCmp = ({imgUrl, index}: {imgUrl: any, index: number}) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`person-${index}`}/>
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View>
      <Text>End date</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
