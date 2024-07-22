import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Gmail = ({
  navigationexpandLess,
  globe,
  gmail,
  gmailcom,
  edit,
  gmailWidth,
  gmailMarginTop,
  gmailPosition,
  gmailTop,
  gmailRight,
  gmailLeft,
}) => {
  const gmailStyle = useMemo(() => {
    return {
      ...getStyleValue("width", gmailWidth),
      ...getStyleValue("marginTop", gmailMarginTop),
      ...getStyleValue("position", gmailPosition),
      ...getStyleValue("top", gmailTop),
      ...getStyleValue("right", gmailRight),
      ...getStyleValue("left", gmailLeft),
    };
  }, [
    gmailWidth,
    gmailMarginTop,
    gmailPosition,
    gmailTop,
    gmailRight,
    gmailLeft,
  ]);

  return (
    <View style={[styles.gmail, styles.cardLayout, gmailStyle]}>
      <View style={[styles.card, styles.cardLayout]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={navigationexpandLess}
        />
        <Image
          style={[styles.globeIcon, styles.iconLayout]}
          contentFit="cover"
          source={globe}
        />
        <View style={styles.gmailParent}>
          <Text style={[styles.gmail1, styles.gmail1Typo]}>{gmail}</Text>
          <Text style={[styles.gmailcom, styles.gmail1Typo]}>{gmailcom}</Text>
        </View>
        <Image
          style={[styles.globeIcon, styles.iconLayout]}
          contentFit="cover"
          source={edit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    height: 60,
    borderRadius: Border.br_xs,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  gmail1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.jostRegular,
    lineHeight: 20,
    letterSpacing: 0,
  },
  globeIcon: {
    marginLeft: 8,
  },
  gmail1: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  gmailcom: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    width: 293,
    marginTop: 4,
    flex: 1,
  },
  gmailParent: {
    height: 45,
    paddingLeft: Padding.p_9xs,
    flex: 1,
    marginLeft: 8,
  },
  card: {
    width: 373,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
  },
  gmail: {
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    backgroundColor: Color.colorMintcream,
    width: 383,
    paddingHorizontal: Padding.p_5xs,
  },
});

export default Gmail;
