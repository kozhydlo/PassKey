import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultIconTrueImage = ({
  stateDefaultIconTrueImage,
  stateDefaultIconTruePosition,
  stateDefaultIconTrueTop,
  stateDefaultIconTrueLeft,
  stateDefaultIconTrueWidth,
  stateDefaultIconTrueHeight,
}) => {
  const stateDefaultIconTrueStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultIconTruePosition),
      ...getStyleValue("top", stateDefaultIconTrueTop),
      ...getStyleValue("left", stateDefaultIconTrueLeft),
      ...getStyleValue("width", stateDefaultIconTrueWidth),
      ...getStyleValue("height", stateDefaultIconTrueHeight),
    };
  }, [
    stateDefaultIconTruePosition,
    stateDefaultIconTrueTop,
    stateDefaultIconTrueLeft,
    stateDefaultIconTrueWidth,
    stateDefaultIconTrueHeight,
  ]);

  return (
    <Image
      style={[styles.statedefaultIcontrue, stateDefaultIconTrueStyle]}
      contentFit="cover"
      source={stateDefaultIconTrueImage}
    />
  );
};

const styles = StyleSheet.create({
  statedefaultIcontrue: {
    borderRadius: Border.br_61xl,
    width: 80,
    height: 80,
  },
});

export default StateDefaultIconTrueImage;
