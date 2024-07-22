import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeChildPosition]} />
      <Image
        style={styles.setings1Icon}
        contentFit="cover"
        source={require("../assets/setings-1.png")}
      />
      <Image
        style={[styles.logo11Icon, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/logo1-1.png")}
      />
      <Image
        style={[styles.add1Icon, styles.addANewPosition]}
        contentFit="cover"
        source={require("../assets/add-1.png")}
      />
      <Text style={[styles.addANew, styles.addANewPosition]}>
        Add a new password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildPosition: {
    left: 23,
    position: "absolute",
  },
  addANewPosition: {
    left: "50%",
    position: "absolute",
  },
  homeChild: {
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
  add1Icon: {
    marginLeft: -37,
    top: 430,
    width: 74,
    height: 75,
    overflow: "hidden",
  },
  addANew: {
    marginLeft: -94,
    top: 388,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.jostMedium,
    color: Color.colorBlack,
    textAlign: "center",
  },
  home: {
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

export default Home;
