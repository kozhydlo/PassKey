import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypeDefaultValueNoLabel from "../components/TypeDefaultValueNoLabel";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const End = () => {
  return (
    <View style={styles.end}>
      <View style={[styles.endChild, styles.endChildPosition]} />
      <Image
        style={[styles.setings1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/setings-1.png")}
      />
      <Image
        style={[styles.logo11Icon, styles.endChildPosition]}
        contentFit="cover"
        source={require("../assets/logo1-1.png")}
      />
      <View style={[styles.fullname, styles.fullnameLayout1]}>
        <View style={[styles.fullnameChild, styles.fullnameBorder]} />
        <Text style={styles.description}>Description</Text>
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
        typeDefaultValueNoLabelTop={385}
        typeDefaultValueNoLabelLeft={46}
      />
      <View style={[styles.signupbtn, styles.signupbtnLayout]}>
        <View style={[styles.signupbtnChild, styles.signupbtnLayout]} />
        <Text style={styles.generate}>Generate</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text
          style={[styles.yourPassword, styles.cancelTypo]}
        >{`Your password `}</Text>
        <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
        <View style={[styles.fullname1, styles.fullnameLayout]}>
          <View style={[styles.fullnameItem, styles.fullnameLayout]} />
          <Text style={styles.vg038qiuykir}>vg038qiuYkiR</Text>
          <Image
            style={[styles.copy1Icon, styles.copy1IconLayout]}
            contentFit="cover"
            source={require("../assets/copy-1.png")}
          />
        </View>
        <View style={[styles.signupbtn1, styles.signupbtn1Position]}>
          <View style={[styles.signupbtnItem, styles.groupItemLayout]} />
          <Text style={[styles.generateAgain, styles.saveTypo]}>
            Generate again
          </Text>
          <View style={[styles.rectangleGroup, styles.groupItemLayout]}>
            <View style={[styles.groupItem, styles.groupItemLayout]} />
            <Text style={[styles.save, styles.saveTypo]}>Save</Text>
          </View>
        </View>
        <Image
          style={[styles.groupInner, styles.signupbtn1Position]}
          contentFit="cover"
          source={require("../assets/group-42.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  endChildPosition: {
    left: 23,
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  fullnameLayout1: {
    height: 61,
    width: 371,
    position: "absolute",
  },
  fullnameBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  checkboxLayout: {
    height: 40,
    width: 40,
    left: 30,
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
    left: 309,
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  aZ1Typo: {
    top: 299,
    height: 17,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  signupbtnLayout: {
    width: 268,
    height: 50,
    position: "absolute",
  },
  groupChildLayout: {
    height: 474,
    width: 385,
    position: "absolute",
  },
  cancelTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.jostMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  fullnameLayout: {
    width: 342,
    height: 61,
    position: "absolute",
  },
  copy1IconLayout: {
    height: 30,
    width: 30,
    top: 15,
  },
  signupbtn1Position: {
    left: 17,
    position: "absolute",
  },
  groupItemLayout: {
    width: 161,
    height: 50,
    top: 0,
    position: "absolute",
  },
  saveTypo: {
    top: 11,
    left: "50%",
    color: Color.colorWhite,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  endChild: {
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
  },
  logo11Icon: {
    top: 36,
    width: 60,
    height: 67,
  },
  fullnameChild: {
    height: 61,
    width: 371,
    position: "absolute",
  },
  description: {
    top: 16,
    height: 29,
    textAlign: "center",
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_xl,
    width: 117,
    color: Color.colorDimgray_200,
    left: 0,
    position: "absolute",
  },
  fullname: {
    left: 30,
    height: 61,
    width: 371,
    top: 144,
  },
  checkbox11: {
    top: 240,
  },
  checkbox12: {
    top: 291,
  },
  text: {
    top: 247,
    left: 75,
    height: 17,
  },
  checkbox13: {
    top: 240,
  },
  aZ: {
    top: 251,
    left: 354,
  },
  checkbox14: {
    top: 291,
  },
  text1: {
    width: 47,
    left: 354,
  },
  aZ1: {
    width: 32,
    top: 299,
    left: 75,
  },
  length25: {
    top: 351,
    width: 79,
    height: 23,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
    left: 30,
    position: "absolute",
  },
  signupbtnChild: {
    backgroundColor: Color.colorMediumseagreen,
    height: 50,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    width: 268,
  },
  generate: {
    top: 10,
    left: 84,
    width: 99,
    height: 35,
    color: Color.colorWhite,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  signupbtn: {
    top: 448,
    left: 76,
    height: 50,
  },
  groupChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSilver,
    left: 0,
    width: 385,
    top: 0,
  },
  yourPassword: {
    marginLeft: -91.5,
    top: 127,
    color: Color.colorBlack,
    width: 189,
    height: 22,
  },
  cancel: {
    marginLeft: -173.5,
    top: 23,
    height: 15,
    width: 117,
    color: Color.colorDimgray_200,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.jostMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    left: "50%",
  },
  fullnameItem: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  vg038qiuykir: {
    left: 11,
    width: 320,
    top: 15,
    height: 29,
    textAlign: "center",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  copy1Icon: {
    left: 297,
    position: "absolute",
    overflow: "hidden",
  },
  fullname1: {
    top: 159,
    left: 24,
  },
  signupbtnItem: {
    backgroundColor: "#61de7e",
    borderRadius: Border.br_5xs,
    left: 0,
  },
  generateAgain: {
    marginLeft: -176.5,
    width: 156,
    height: 21,
  },
  groupItem: {
    backgroundColor: "#409254",
    borderRadius: Border.br_5xs,
    left: 0,
  },
  save: {
    marginLeft: -54.5,
    width: 109,
    height: 22,
  },
  rectangleGroup: {
    left: 192,
  },
  signupbtn1: {
    top: 238,
    width: 353,
    height: 50,
  },
  groupInner: {
    height: 30,
    width: 30,
    top: 15,
  },
  rectangleParent: {
    width: 385,
    top: 144,
    left: 23,
  },
  end: {
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

export default End;
