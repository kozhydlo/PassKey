import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Component from "./Component";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Card = () => {
  return (
    <View style={[styles.card, styles.cardSpaceBlock]}>
      <View style={[styles.card1, styles.cardSpaceBlock]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/navigationexpand-more.png")}
        />
        <Image
          style={[styles.globeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/globe.png")}
        />
        <View style={styles.gmailParent}>
          <Text style={styles.gmail}>Gmail</Text>
          <Text style={[styles.gmailcom, styles.gmailcomTypo]}>{`gmail.com
`}</Text>
        </View>
        <Image
          style={[styles.globeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/edit.png")}
        />
      </View>
      <Component
        prop="Login"
        emailgmailcom={`email@gmail.com
`}
        clipboard={require("../assets/clipboard.png")}
      />
      <View style={styles.view}>
        <Text style={[styles.password, styles.gmailcomTypo]}>Password</Text>
        <View style={styles.password1}>
          <View style={[styles.passwordInner, styles.passwordInnerFlexBox]}>
            <View style={styles.passwordInnerFlexBox}>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
            </View>
          </View>
          <View style={styles.eyeoffParent}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/eyeoff.png")}
            />
            <Image
              style={[styles.clipboardIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/clipboard.png")}
            />
          </View>
        </View>
      </View>
      <Component
        prop="URL"
        emailgmailcom={`https://mail.google.com/mail/u/0/#inbox
`}
        clipboard={require("../assets/link2.png")}
        propHeight={64}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardSpaceBlock: {
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  gmailcomTypo: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.jostRegular,
    lineHeight: 20,
    letterSpacing: 0,
  },
  passwordInnerFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout: {
    height: 6,
    width: 6,
  },
  globeIcon: {
    marginLeft: 8,
  },
  gmail: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.jostRegular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  gmailcom: {
    width: 293,
    marginTop: 4,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
    flex: 1,
  },
  gmailParent: {
    height: 45,
    paddingLeft: Padding.p_9xs,
    flex: 1,
    marginLeft: 8,
  },
  card1: {
    width: 373,
    height: 60,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
  },
  password: {
    fontSize: FontSize.desktopBodyRegularText3_size,
    width: 357,
  },
  frameItem: {
    marginLeft: 3,
  },
  passwordInner: {
    flex: 1,
  },
  clipboardIcon: {
    marginLeft: 4,
  },
  eyeoffParent: {
    marginLeft: 24,
    flexDirection: "row",
  },
  password1: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorSeagreen_100,
    paddingVertical: Padding.p_9xs,
    width: 357,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
  },
  view: {
    marginTop: 8,
  },
  card: {
    position: "absolute",
    top: 114,
    right: 29,
    left: 28,
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    backgroundColor: Color.colorMintcream,
    height: 270,
    paddingHorizontal: Padding.p_5xs,
  },
});

export default Card;
