import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SliderComponentsBar = ({
  sliderComponentsBarPosition,
  sliderComponentsBarBorderRadius,
  sliderComponentsBarBackgroundColor,
  sliderComponentsBarTop,
  sliderComponentsBarLeft,
  sliderComponentsBarWidth,
  sliderComponentsBarHeight,
}) => {
  const sliderComponentsBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sliderComponentsBarPosition),
      ...getStyleValue("borderRadius", sliderComponentsBarBorderRadius),
      ...getStyleValue("backgroundColor", sliderComponentsBarBackgroundColor),
      ...getStyleValue("top", sliderComponentsBarTop),
      ...getStyleValue("left", sliderComponentsBarLeft),
      ...getStyleValue("width", sliderComponentsBarWidth),
      ...getStyleValue("height", sliderComponentsBarHeight),
    };
  }, [
    sliderComponentsBarPosition,
    sliderComponentsBarBorderRadius,
    sliderComponentsBarBackgroundColor,
    sliderComponentsBarTop,
    sliderComponentsBarLeft,
    sliderComponentsBarWidth,
    sliderComponentsBarHeight,
  ]);

  return (
    <View style={[styles.sliderComponentsbar, sliderComponentsBarStyle]} />
  );
};

const styles = StyleSheet.create({
  sliderComponentsbar: {
    borderRadius: Border.br_981xl,
    backgroundColor: Color.sliderbar,
    width: 160,
    height: 8,
    overflow: "hidden",
  },
});

export default SliderComponentsBar;
