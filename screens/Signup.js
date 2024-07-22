import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Email from "../components/Email";
import PasswordForm from "../components/PasswordForm";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const Signup = () => {
  return (
    <View style={styles.signup}>
      <Image
        style={styles.bg1Icon}
        contentFit="cover"
        source={require("../assets/bg-1.png")}
      />
      <View style={styles.signupChild} />
      <Text style={[styles.joinWithUs, styles.signUpTypo]}>Join with us!</Text>
      <View style={[styles.signupbtn, styles.signupbtnLayout]}>
        <View style={[styles.signupbtnChild, styles.signupbtnLayout]} />
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      </View>
      <Email
        letter={require("../assets/account.png")}
        emailHere="Full Name"
        propTop={466}
        propLeft={30}
      />
      <Email
        letter={require("../assets/letter.png")}
        emailHere="Email Here"
        propTop={557}
        propLeft={30}
      />
      <PasswordForm propTop={648} propLeft={30} />
      <View style={styles.haveAnAccountParent}>
        <Text
          style={[styles.haveAnAccount, styles.loginHereTypo]}
        >{`Have an account! `}</Text>
        <Text style={[styles.loginHere, styles.loginHereTypo]}>Login here</Text>
      </View>
      <View style={[styles.signupInner, styles.signupInnerLayout]}>
        <View style={[styles.ellipseParent, styles.signupInnerLayout]}>
          <Image
            style={[styles.ellipseParent, styles.signupInnerLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/1-1.png")}
          />
        </View>
      </View>
      <Image
        style={styles.logoRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/logoremovebgpreview-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  signupbtnLayout: {
    height: 50,
    width: 268,
    position: "absolute",
  },
  loginHereTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  signupInnerLayout: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  bg1Icon: {
    left: -39,
    width: 516,
    height: 269,
    top: 0,
    position: "absolute",
  },
  signupChild: {
    top: 195,
    borderTopLeftRadius: Border.br_56xl,
    width: 430,
    height: 737,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  joinWithUs: {
    top: 314,
    left: 133,
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
  signUp: {
    top: 8,
    left: 98,
    fontWeight: "600",
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorWhite,
    width: 73,
    height: 35,
  },
  signupbtn: {
    top: 746,
    left: 81,
  },
  haveAnAccount: {
    fontFamily: FontFamily.jostRegular,
    color: Color.colorBlack,
    left: 0,
  },
  loginHere: {
    left: 111,
    color: Color.colorMediumseagreen,
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
  },
  haveAnAccountParent: {
    top: 824,
    left: 121,
    width: 181,
    height: 20,
    position: "absolute",
  },
  ellipseParent: {
    left: 0,
    top: 0,
  },
  icon: {
    top: 4,
    left: 4,
    width: 64,
    height: 64,
    position: "absolute",
  },
  signupInner: {
    top: 367,
    left: 177,
  },
  logoRemovebgPreview1Icon: {
    top: 209,
    left: 108,
    width: 215,
    height: 169,
    position: "absolute",
  },
  signup: {
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

export default Signup;
