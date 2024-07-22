import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypeDefaultValueNoLabel from "../components/TypeDefaultValueNoLabel";
import GroupComponent from "../components/GroupComponent";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Add1 = () => {
  return (
    <View style={styles.add}>
      <View style={[styles.addChild, styles.addChildPosition]} />
      <Image
        style={styles.setings1Icon}
        contentFit="cover"
        source={require("../assets/setings-11.png")}
      />
      <Image
        style={[styles.logo11Icon, styles.addChildPosition]}
        contentFit="cover"
        source={require("../assets/logo1-1.png")}
      />
      <View style={[styles.fullname, styles.fullnameLayout]}>
        <View style={[styles.fullnameChild, styles.childPosition]} />
        <Text style={styles.login}>Login</Text>
      </View>
      <Image
        style={[styles.checkbox11, styles.checkboxLayout]}
        contentFit="cover"
        source={require("../assets/checkbox-1-1.png")}
      />
      <Image
        style={[styles.checkbox12, styles.checkboxLayout]}
        contentFit="cover"
        source={require("../assets/checkbox-1-2.png")}
      />
      <Text style={[styles.text, styles.aZTypo]}>0-9</Text>
      <Image
        style={[styles.checkbox13, styles.checkboxPosition]}
        contentFit="cover"
        source={require("../assets/checkbox-1-1.png")}
      />
      <Text style={[styles.aZ, styles.aZTypo]}>A-Z</Text>
      <Image
        style={[styles.checkbox14, styles.checkboxPosition]}
        contentFit="cover"
        source={require("../assets/checkbox-1-1.png")}
      />
      <Text style={[styles.text1, styles.aZ1Typo]}>@#$%</Text>
      <Text style={[styles.aZ1, styles.aZ1Typo]}>a-z</Text>
      <Text style={styles.length25}>Length: 25</Text>
      <TypeDefaultValueNoLabel
        prop="10"
        prop1="50"
        typeDefaultValueNoLabelPosition="absolute"
        typeDefaultValueNoLabelTop={466}
        typeDefaultValueNoLabelLeft={45}
      />
      <View style={[styles.signupbtn, styles.signupbtnLayout]}>
        <View style={[styles.signupbtnChild, styles.signupbtnLayout]} />
        <Text style={styles.generate}>Generate</Text>
      </View>
      <GroupComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  addChildPosition: {
    left: 23,
    position: "absolute",
  },
  fullnameLayout: {
    height: 61,
    width: 371,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  checkboxLayout: {
    height: 40,
    width: 40,
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  aZTypo: {
    height: 17,
    width: 32,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  checkboxPosition: {
    left: 308,
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  aZ1Typo: {
    top: 380,
    height: 17,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  signupbtnLayout: {
    height: 50,
    width: 268,
    position: "absolute",
  },
  addChild: {
    top: 33,
    backgroundColor: Color.colorGainsboro_200,
    width: 383,
    height: 865,
  },
  setings1Icon: {
    top: 49,
    left: 361,
    width: 45,
    height: 45,
    position: "absolute",
    overflow: "hidden",
  },
  logo11Icon: {
    top: 36,
    width: 60,
    height: 67,
  },
  fullnameChild: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 61,
    width: 371,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  login: {
    top: 16,
    fontFamily: FontFamily.jostRegular,
    color: Color.colorDimgray_200,
    width: 117,
    height: 29,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  fullname: {
    top: 225,
    left: 29,
    height: 61,
    width: 371,
  },
  checkbox11: {
    top: 321,
  },
  checkbox12: {
    top: 372,
  },
  text: {
    top: 328,
    left: 74,
    height: 17,
  },
  checkbox13: {
    top: 321,
  },
  aZ: {
    top: 332,
    left: 353,
  },
  checkbox14: {
    top: 372,
  },
  text1: {
    width: 47,
    left: 353,
  },
  aZ1: {
    width: 32,
    top: 380,
    left: 74,
  },
  length25: {
    top: 432,
    width: 79,
    height: 23,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    textAlign: "center",
    left: 29,
    position: "absolute",
  },
  signupbtnChild: {
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  generate: {
    top: 10,
    left: 84,
    color: Color.colorWhite,
    width: 99,
    height: 35,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  signupbtn: {
    top: 529,
    left: 75,
  },
  add: {
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

export default Add1;
