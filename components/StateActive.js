import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateActive = ({ numberValue, stateActiveMarginLeft }) => {
  const stateActiveStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", stateActiveMarginLeft),
    };
  }, [stateActiveMarginLeft]);

  return (
    <View style={[styles.stateactive, stateActiveStyle]}>
      <Text style={styles.text}>{numberValue}</Text>
      <View style={styles.stateactiveChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: -3.5,
    marginLeft: -4,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_8xs,
    lineHeight: 7,
    fontWeight: "700",
    fontFamily: FontFamily.vattenfallHallDisplay,
    color: Color.colorGray_100,
    textAlign: "center",
    width: 8,
    display: "none",
    position: "absolute",
  },
  stateactiveChild: {
    top: 24,
    left: 24,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_200,
    width: 16,
    height: 16,
    position: "absolute",
  },
  stateactive: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_500,
    width: 64,
    height: 64,
  },
});

export default StateActive;
