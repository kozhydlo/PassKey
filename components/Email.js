import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Email = ({ letter, emailHere, propTop, propLeft }) => {
  const emailStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.email, styles.emailLayout, emailStyle]}>
      <View style={[styles.emailChild, styles.emailLayout]} />
      <Image style={styles.letterIcon} contentFit="cover" source={letter} />
      <Text style={styles.emailHere}>{emailHere}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    height: 61,
    width: 371,
    position: "absolute",
  },
  emailChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
  },
  letterIcon: {
    top: 11,
    left: 14,
    width: 30,
    height: 39,
    position: "absolute",
  },
  emailHere: {
    top: 19,
    left: 72,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.jostRegular,
    color: Color.colorDimgray_200,
    textAlign: "center",
    position: "absolute",
  },
  email: {
    top: 374,
    left: 29,
  },
});

export default Email;
