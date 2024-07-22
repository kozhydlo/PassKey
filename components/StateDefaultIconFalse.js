import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultIconFalse = ({
  carNumber,
  stateDefaultIconFalsePosition,
  stateDefaultIconFalseTop,
  stateDefaultIconFalseLeft,
  stateDefaultIconFalseWidth,
  stateDefaultIconFalseHeight,
}) => {
  const stateDefaultIconFalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultIconFalsePosition),
      ...getStyleValue("top", stateDefaultIconFalseTop),
      ...getStyleValue("left", stateDefaultIconFalseLeft),
      ...getStyleValue("width", stateDefaultIconFalseWidth),
      ...getStyleValue("height", stateDefaultIconFalseHeight),
    };
  }, [
    stateDefaultIconFalsePosition,
    stateDefaultIconFalseTop,
    stateDefaultIconFalseLeft,
    stateDefaultIconFalseWidth,
    stateDefaultIconFalseHeight,
  ]);

  return (
    <View style={[styles.statedefaultIconfalse, stateDefaultIconFalseStyle]}>
      <Text style={styles.text}>{carNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    marginTop: -16,
    marginLeft: -16,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.colorGray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
  },
  statedefaultIconfalse: {
    borderRadius: Border.br_61xl,
    width: 80,
    height: 80,
  },
});

export default StateDefaultIconFalse;
