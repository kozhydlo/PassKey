import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const LaunchScreen = () => {
  return (
    <View style={styles.launchScreen}>
      <Image
        style={styles.bg1Icon}
        contentFit="cover"
        source={require("../assets/bg-11.png")}
      />
      <View style={styles.launchScreenChild} />
      <View style={styles.signupbtn}>
        <View style={styles.signupbtnChild} />
        <Text style={styles.createAnAccount}>Create an account</Text>
      </View>
      <View style={styles.haveAnAccountParent}>
        <Text style={styles.haveAnAccount}>{`Have an account! `}</Text>
        <Text style={styles.loginHere}>Login here</Text>
      </View>
      <Text style={[styles.heading, styles.textFlexBox]}>
        Welcome to PassKey
      </Text>
      <Text style={[styles.text, styles.textFlexBox]}>
        The world's first password generator with a very cool system
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: 44,
    color: Color.colorBlack,
    fontFamily: FontFamily.jostRegular,
    textAlign: "center",
    position: "absolute",
  },
  bg1Icon: {
    top: -5,
    left: -39,
    width: 516,
    height: 937,
    position: "absolute",
  },
  launchScreenChild: {
    top: 647,
    borderTopLeftRadius: Border.br_56xl,
    width: 430,
    height: 285,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  signupbtnChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorMediumseagreen,
    top: 0,
    height: 50,
    width: 268,
    left: 0,
    position: "absolute",
  },
  createAnAccount: {
    top: 9,
    left: 53,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorWhite,
    width: 170,
    height: 22,
    textAlign: "center",
    position: "absolute",
  },
  signupbtn: {
    top: 790,
    left: 81,
    height: 50,
    width: 268,
    position: "absolute",
  },
  haveAnAccount: {
    color: Color.colorBlack,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 0,
    left: 0,
    position: "absolute",
  },
  loginHere: {
    left: 111,
    fontWeight: "700",
    fontFamily: FontFamily.jostBold,
    color: Color.colorMediumseagreen,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  haveAnAccountParent: {
    top: 849,
    left: 125,
    width: 181,
    height: 20,
    position: "absolute",
  },
  heading: {
    top: 678,
    fontSize: 28,
    lineHeight: 39,
  },
  text: {
    top: 729,
    fontSize: FontSize.size_base,
    lineHeight: 26,
  },
  launchScreen: {
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

export default LaunchScreen;
