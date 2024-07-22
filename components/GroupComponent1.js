import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-12.png")}
        />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/1-11.png")}
        />
      </View>
      <View style={styles.vetrivelRaviParent}>
        <Text style={[styles.vetrivelRavi, styles.vetrivelRaviTypo]}>
          Vetrivel Ravi
        </Text>
        <Text style={[styles.vetrivelgalaxygmailcom, styles.vetrivelRaviTypo]}>
          vetrivel.galaxy@gmail.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 111,
    width: 111,
    top: 0,
    position: "absolute",
  },
  vetrivelRaviTypo: {
    textAlign: "center",
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  icon: {
    top: 6,
    left: 6,
    width: 100,
    height: 100,
    position: "absolute",
  },
  ellipseParent: {
    left: 92,
  },
  vetrivelRavi: {
    left: 25,
    fontSize: FontSize.size_5xl,
    color: Color.colorMediumseagreen,
    width: 245,
    top: 0,
    textAlign: "center",
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
  },
  vetrivelgalaxygmailcom: {
    top: 35,
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray_100,
    height: 47,
    left: 0,
    width: 295,
  },
  vetrivelRaviParent: {
    top: 125,
    height: 82,
    left: 0,
    width: 295,
    position: "absolute",
  },
  groupParent: {
    top: 104,
    left: 67,
    height: 207,
    width: 295,
    position: "absolute",
  },
});

export default GroupComponent1;
