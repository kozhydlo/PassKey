import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={[styles.addANew, styles.addANewFlexBox]}>
        Add a new password
      </Text>
      <View style={[styles.fullname, styles.fullnameLayout]}>
        <View style={[styles.fullnameChild, styles.childPosition]} />
        <Text style={[styles.passwordTo, styles.addANewFlexBox]}>
          Password to ...
        </Text>
      </View>
      <View style={[styles.signupbtn, styles.signupbtnLayout]}>
        <View style={[styles.signupbtnChild, styles.signupbtnLayout]} />
        <Text style={[styles.continue, styles.addANewFlexBox]}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addANewFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  fullnameLayout: {
    height: 61,
    width: 296,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  signupbtnLayout: {
    height: 50,
    width: 268,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSilver,
    left: 0,
    top: 0,
    height: 425,
    width: 377,
    position: "absolute",
  },
  addANew: {
    marginLeft: -93.5,
    top: 132,
    left: "50%",
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.jostMedium,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  fullnameChild: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 61,
    width: 296,
    position: "absolute",
  },
  passwordTo: {
    top: 18,
    left: 18,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.jostRegular,
    color: Color.colorDimgray_200,
    width: 101,
    height: 23,
  },
  fullname: {
    top: 167,
    left: 41,
  },
  signupbtnChild: {
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  continue: {
    top: 10,
    left: 84,
    fontWeight: "600",
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorWhite,
    width: 99,
    height: 35,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  signupbtn: {
    top: 243,
    left: 57,
  },
  rectangleParent: {
    top: 154,
    left: 23,
    height: 425,
    width: 377,
    position: "absolute",
  },
});

export default GroupComponent;
