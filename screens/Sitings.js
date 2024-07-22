import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import GroupComponent1 from "../components/GroupComponent1";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Sitings = () => {
  return (
    <View style={styles.sitings}>
      <Image
        style={[styles.chevronLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-42.png")}
      />
      <Image
        style={[styles.language2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/language-2.png")}
      />
      <GroupComponent1 />
      <Text style={styles.logout}>Logout</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.windows10}>Windows 10 - 11</Text>
        <Text style={[styles.yourComputer, styles.authorTypo]}>
          Your computer
        </Text>
      </View>
      <View style={styles.sourceCodeParent}>
        <Text style={styles.sourceCode}>Source code</Text>
        <Image
          style={[styles.chevronRightIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevron-right.png")}
        />
      </View>
      <View style={[styles.authorParent, styles.parentLayout]}>
        <Text style={[styles.author, styles.authorTypo]}>Author</Text>
        <Image
          style={[styles.chevronRightIcon1, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevron-right.png")}
        />
      </View>
      <View style={[styles.shareParent, styles.parentLayout]}>
        <Text style={[styles.author, styles.authorTypo]}>Share</Text>
        <Image
          style={[styles.chevronRightIcon1, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevron-right.png")}
        />
      </View>
      <Image
        style={[styles.code1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/code-1.png")}
      />
      <View style={styles.sitingsChild} />
      <Image
        style={[styles.computer1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/computer-1.png")}
      />
      <Image
        style={[styles.windows1Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/windows-1.png")}
      />
      <Image
        style={[styles.telegram1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/telegram-1.png")}
      />
      <Image
        style={[styles.help1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/help-1.png")}
      />
      <Image
        style={[styles.author2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/author-2.png")}
      />
      <View style={[styles.projectNewsParent, styles.chevronIconLayout]}>
        <Text style={[styles.projectNews, styles.authorTypo]}>
          Project news
        </Text>
        <Image
          style={[styles.chevronRightIcon3, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevron-right.png")}
        />
      </View>
      <Image
        style={[styles.share1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/share-1.png")}
      />
      <Image
        style={[styles.qrCode2Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/qrcode-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  authorTypo: {
    height: 17,
    fontSize: FontSize.size_base,
    top: 0,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  chevronIconLayout: {
    height: 19,
    position: "absolute",
  },
  parentLayout: {
    height: 22,
    width: 302,
    left: 83,
    position: "absolute",
  },
  iconPosition: {
    left: 45,
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition2: {
    position: "absolute",
    overflow: "hidden",
  },
  chevronLeftIcon: {
    left: 27,
    top: 42,
    width: 30,
  },
  language2Icon: {
    left: 385,
    top: 42,
    width: 30,
    overflow: "hidden",
  },
  logout: {
    top: 802,
    left: 183,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.jostBold,
    color: Color.colorMediumseagreen,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    top: 34,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    height: 132,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 340,
    position: "absolute",
  },
  windows10: {
    top: 84,
    left: 127,
    fontSize: FontSize.size_5xl,
    width: 183,
    height: 32,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  yourComputer: {
    left: 41,
    width: 106,
  },
  rectangleParent: {
    top: 335,
    height: 166,
    width: 340,
    left: 45,
    position: "absolute",
  },
  sourceCode: {
    width: 91,
    height: 18,
    fontSize: FontSize.size_base,
    top: 0,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  chevronRightIcon: {
    top: 2,
    width: 25,
    left: 277,
    height: 19,
  },
  sourceCodeParent: {
    top: 527,
    height: 21,
    width: 302,
    left: 83,
    position: "absolute",
  },
  author: {
    width: 54,
    left: 0,
    height: 17,
  },
  chevronRightIcon1: {
    top: 3,
    width: 25,
    left: 277,
    height: 19,
  },
  authorParent: {
    top: 576,
  },
  shareParent: {
    top: 626,
  },
  code1Icon: {
    top: 522,
  },
  sitingsChild: {
    top: 402,
    backgroundColor: "rgba(217, 217, 217, 0.8)",
    width: 76,
    height: 67,
    left: 83,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  computer1Icon: {
    top: 333,
    left: 48,
    overflow: "hidden",
  },
  windows1Icon: {
    top: 413,
    left: 98,
    width: 45,
    height: 45,
  },
  telegram1Icon: {
    top: 674,
  },
  help1Icon: {
    left: 345,
    top: 42,
    width: 30,
    overflow: "hidden",
  },
  author2Icon: {
    top: 572,
  },
  projectNews: {
    width: 96,
    left: 0,
    height: 17,
  },
  chevronRightIcon3: {
    left: 273,
    width: 25,
    top: 0,
    height: 19,
  },
  projectNewsParent: {
    top: 679,
    left: 87,
    width: 298,
  },
  share1Icon: {
    top: 623,
  },
  qrCode2Icon: {
    top: 336,
    left: 355,
    height: 25,
    width: 25,
  },
  sitings: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Sitings;
