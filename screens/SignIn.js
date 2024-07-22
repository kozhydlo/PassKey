import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Email from "../components/Email";
import PasswordForm from "../components/PasswordForm";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signin}>
      <Image
        style={styles.bg1Icon}
        contentFit="cover"
        source={require("../assets/bg-1.png")}
      />
      <View style={styles.signinChild} />
      <Text style={[styles.welcomeBack, styles.singInTypo]}>Welcome Back</Text>
      <View style={[styles.signupbtn, styles.signupbtnLayout]}>
        <View style={[styles.signupbtnChild, styles.signupbtnLayout]} />
        <Text style={[styles.singIn, styles.singInTypo]}>Sing In</Text>
      </View>
      <Email letter={require("../assets/letter.png")} emailHere="Email Here" />
      <PasswordForm />
      <View style={styles.doesntHaveAnAccountParent}>
        <Text style={[styles.doesntHaveAn, styles.createHereTypo]}>
          Doesn’t have an account ?
        </Text>
        <Text style={[styles.createHere, styles.createHereTypo]}>
          Create here
        </Text>
      </View>
      <Image
        style={styles.logoRemovebgPreview2Icon}
        contentFit="cover"
        source={require("../assets/logoremovebgpreview-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  singInTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  signupbtnLayout: {
    height: 50,
    width: 268,
    position: "absolute",
  },
  createHereTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  bg1Icon: {
    left: -39,
    width: 516,
    height: 269,
    top: 0,
    position: "absolute",
  },
  signinChild: {
    top: 195,
    borderTopLeftRadius: Border.br_56xl,
    width: 430,
    height: 737,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  welcomeBack: {
    top: 313,
    left: 136,
    color: Color.colorDimgray_200,
    width: 165,
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
  },
  signupbtnChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorMediumseagreen,
    left: 0,
    top: 0,
  },
  singIn: {
    top: 8,
    left: 98,
    fontWeight: "600",
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorWhite,
    width: 73,
    height: 35,
  },
  signupbtn: {
    top: 564,
    left: 81,
  },
  doesntHaveAn: {
    fontFamily: FontFamily.jostRegular,
    color: Color.colorBlack,
    left: 0,
  },
  createHere: {
    left: 162,
    color: Color.colorMediumseagreen,
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
  },
  doesntHaveAnAccountParent: {
    top: 644,
    left: 96,
    width: 240,
    height: 20,
    position: "absolute",
  },
  logoRemovebgPreview2Icon: {
    top: 205,
    left: 111,
    width: 215,
    height: 169,
    position: "absolute",
  },
  signin: {
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

export default SignIn;
