import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordForm = ({ propTop, propLeft }) => {
  const passwordStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.password, styles.passwordLayout, passwordStyle]}>
      <View style={[styles.passwordChild, styles.passwordLayout]} />
      <Text style={styles.password1}>Password</Text>
      <Image
        style={[styles.lockIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={[styles.eyeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/eye.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordLayout: {
    height: 61,
    width: 371,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    top: 16,
    position: "absolute",
  },
  passwordChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
  },
  password1: {
    top: 19,
    left: 72,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.jostRegular,
    color: Color.colorDimgray_200,
    textAlign: "center",
    position: "absolute",
  },
  lockIcon: {
    left: 14,
  },
  eyeIcon: {
    left: 325,
  },
  password: {
    top: 465,
    left: 29,
  },
});

export default PasswordForm;
