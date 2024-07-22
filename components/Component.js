import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = ({ prop, emailgmailcom, clipboard, propHeight }) => {
  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  return (
    <View style={[styles.view, viewStyle]}>
      <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
      <View style={styles.login}>
        <Text style={[styles.emailgmailcom, styles.textTypo]}>
          {emailgmailcom}
        </Text>
        <Image
          style={styles.clipboardIcon}
          contentFit="cover"
          source={clipboard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.jostRegular,
    lineHeight: 20,
    letterSpacing: 0,
  },
  text: {
    fontSize: FontSize.desktopBodyRegularText3_size,
    color: Color.colorDarkslategray,
    width: 357,
  },
  emailgmailcom: {
    flex: 1,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    height: 24,
  },
  clipboardIcon: {
    width: 24,
    marginLeft: 24,
    height: 24,
  },
  login: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorSeagreen_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    width: 357,
  },
  view: {
    marginTop: 8,
  },
});

export default Component;
