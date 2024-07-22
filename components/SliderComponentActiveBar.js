import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SliderComponentActiveBar = ({
  sliderComponentActiveBarPosition,
  sliderComponentActiveBarWidth,
  sliderComponentActiveBarTop,
  sliderComponentActiveBarLeft,
}) => {
  const sliderComponentActiveBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sliderComponentActiveBarPosition),
      ...getStyleValue("width", sliderComponentActiveBarWidth),
      ...getStyleValue("top", sliderComponentActiveBarTop),
      ...getStyleValue("left", sliderComponentActiveBarLeft),
    };
  }, [
    sliderComponentActiveBarPosition,
    sliderComponentActiveBarWidth,
    sliderComponentActiveBarTop,
    sliderComponentActiveBarLeft,
  ]);

  return (
    <View
      style={[styles.sliderComponentactiveBar, sliderComponentActiveBarStyle]}
    />
  );
};

const styles = StyleSheet.create({
  sliderComponentactiveBar: {
    borderRadius: Border.br_981xl,
    backgroundColor: Color.primary,
    width: 160,
    height: 8,
  },
});

export default SliderComponentActiveBar;
