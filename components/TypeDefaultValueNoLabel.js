import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeDefaultValueNoLabel = ({
  prop,
  prop1,
  typeDefaultValueNoLabelPosition,
  typeDefaultValueNoLabelTop,
  typeDefaultValueNoLabelLeft,
}) => {
  const typeDefaultValueNoLabelStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeDefaultValueNoLabelPosition),
      ...getStyleValue("top", typeDefaultValueNoLabelTop),
      ...getStyleValue("left", typeDefaultValueNoLabelLeft),
    };
  }, [
    typeDefaultValueNoLabelPosition,
    typeDefaultValueNoLabelTop,
    typeDefaultValueNoLabelLeft,
  ]);

  return (
    <View
      style={[styles.typedefaultValuenoLabel, typeDefaultValueNoLabelStyle]}
    >
      <View style={styles.label}>
        <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{prop1}</Text>
      </View>
      <View style={styles.slidebar}>
        <View
          style={[styles.sliderComponents, styles.sliderComponentsPosition]}
        />
      </View>
      <View style={[styles.sliderComponentsbar, styles.sliderLayout]} />
      <View style={[styles.sliderComponentsbar1, styles.sliderLayout]} />
      <Image
        style={[styles.handleComponentIcon, styles.sliderComponentsPosition]}
        contentFit="cover"
        source={require("../assets/handle-component.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.grayText,
    fontFamily: FontFamily.desktopBodyRegularText3,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.desktopBodyRegularText3_size,
  },
  sliderComponentsPosition: {
    top: 0,
    position: "absolute",
  },
  sliderLayout: {
    width: 162,
    backgroundColor: Color.colorGray_500,
    top: 0,
    overflow: "hidden",
    height: 20,
    position: "absolute",
  },
  text: {
    textAlign: "left",
  },
  text1: {
    textAlign: "right",
  },
  label: {
    top: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    height: 20,
    left: 0,
    position: "absolute",
    width: 324,
  },
  sliderComponents: {
    left: -160,
    backgroundColor: Color.primary,
    height: 8,
    borderRadius: Border.br_981xl,
    top: 0,
    width: 324,
  },
  slidebar: {
    top: 6,
    backgroundColor: Color.sliderbar,
    overflow: "hidden",
    height: 8,
    borderRadius: Border.br_981xl,
    left: 0,
    position: "absolute",
    width: 324,
  },
  sliderComponentsbar: {
    left: 0,
  },
  sliderComponentsbar1: {
    left: 162,
  },
  handleComponentIcon: {
    left: 152,
    width: 20,
    height: 20,
  },
  typedefaultValuenoLabel: {
    height: 36,
    width: 324,
  },
});

export default TypeDefaultValueNoLabel;
