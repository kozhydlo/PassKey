import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import StateActive from "../components/StateActive";
import StateDefaultIconFalse from "../components/StateDefaultIconFalse";
import StateDefaultIconTrueImage from "../components/StateDefaultIconTrueImage";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Code = () => {
  return (
    <View style={styles.code}>
      <Image
        style={styles.bg1Icon}
        contentFit="cover"
        source={require("../assets/bg-1.png")}
      />
      <View style={styles.codeChild} />
      <View style={[styles.digitInputParent, styles.enterYourCodePosition]}>
        <StateActive numberValue="0" stateActiveMarginLeft="unset" />
        <StateActive numberValue="0" stateActiveMarginLeft={16} />
        <StateActive numberValue="0" stateActiveMarginLeft={16} />
        <StateActive numberValue="0" stateActiveMarginLeft={16} />
      </View>
      <StateDefaultIconFalse
        carNumber="1"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={548}
        stateDefaultIconFalseLeft={55}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <Text style={[styles.enterYourCode, styles.enterYourCodePosition]}>
        Enter your code
      </Text>
      <StateDefaultIconFalse
        carNumber="4"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={628}
        stateDefaultIconFalseLeft={55}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <StateDefaultIconFalse
        carNumber="7"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={708}
        stateDefaultIconFalseLeft={55}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <StateDefaultIconFalse
        carNumber="2"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={548}
        stateDefaultIconFalseLeft={175}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <StateDefaultIconFalse
        carNumber="5"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={628}
        stateDefaultIconFalseLeft={175}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <StateDefaultIconFalse
        carNumber="8"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={708}
        stateDefaultIconFalseLeft={175}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <StateDefaultIconFalse
        carNumber="0"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={788}
        stateDefaultIconFalseLeft={175}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <StateDefaultIconFalse
        carNumber="3"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={548}
        stateDefaultIconFalseLeft={295}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <StateDefaultIconFalse
        carNumber="6"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={628}
        stateDefaultIconFalseLeft={295}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <StateDefaultIconFalse
        carNumber="9"
        stateDefaultIconFalsePosition="absolute"
        stateDefaultIconFalseTop={708}
        stateDefaultIconFalseLeft={295}
        stateDefaultIconFalseWidth={80}
        stateDefaultIconFalseHeight={80}
      />
      <Image
        style={styles.logoRemovebgPreview3Icon}
        contentFit="cover"
        source={require("../assets/logoremovebgpreview-2.png")}
      />
      <StateDefaultIconTrueImage
        stateDefaultIconTrueImage={require("../assets/digit-button.png")}
        stateDefaultIconTruePosition="absolute"
        stateDefaultIconTrueTop={788}
        stateDefaultIconTrueLeft={295}
        stateDefaultIconTrueWidth={80}
        stateDefaultIconTrueHeight={80}
      />
      <Image
        style={styles.fingerprint1Icon}
        contentFit="cover"
        source={require("../assets/fingerprint-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  enterYourCodePosition: {
    left: "50%",
    marginLeft: -152,
    position: "absolute",
  },
  bg1Icon: {
    top: 0,
    left: -39,
    width: 516,
    height: 269,
    position: "absolute",
  },
  codeChild: {
    top: 195,
    left: 0,
    borderTopLeftRadius: Border.br_56xl,
    width: 430,
    height: 737,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  digitInputParent: {
    top: 447,
    flexDirection: "row",
  },
  enterYourCode: {
    marginTop: -68,
    top: "50%",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  logoRemovebgPreview3Icon: {
    top: 204,
    left: 112,
    width: 215,
    height: 169,
    position: "absolute",
  },
  fingerprint1Icon: {
    top: 795,
    left: 70,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  code: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Code;
