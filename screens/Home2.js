import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Card from "../components/Card";
import Gmail from "../components/Gmail";
import { Color, Border, Padding } from "../GlobalStyles";

const Home2 = () => {
  return (
    <View style={[styles.home, styles.homeShadowBox]}>
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
      <View style={[styles.fab, styles.fabLayout]}>
        <View style={[styles.backgroundCulling, styles.fabLayout]}>
          <View style={[styles.gap, styles.gapBg]} />
        </View>
        <View style={[styles.backgroundCulling, styles.fabLayout]}>
          <View style={styles.gap1} />
        </View>
        <View style={[styles.fab1, styles.fab1FlexBox]}>
          <View style={[styles.baseForeground, styles.fab1FlexBox]}>
            <Image
              style={styles.contentaddIcon}
              contentFit="cover"
              source={require("../assets/contentadd.png")}
            />
          </View>
        </View>
      </View>
      <Card />
      <Gmail
        navigationexpandLess={require("../assets/navigationexpand-less.png")}
        globe={require("../assets/smartphone1.png")}
        gmail="Binance"
        gmailcom="App"
        edit={require("../assets/edit.png")}
        gmailWidth="unset"
        gmailMarginTop="unset"
        gmailPosition="absolute"
        gmailTop={404}
        gmailRight={29}
        gmailLeft={28}
      />
      <Gmail
        navigationexpandLess={require("../assets/navigationexpand-less.png")}
        globe={require("../assets/filetext.png")}
        gmail="PDF"
        gmailcom="Document"
        edit={require("../assets/edit2.png")}
        gmailWidth="unset"
        gmailMarginTop="unset"
        gmailPosition="absolute"
        gmailTop={480}
        gmailRight={29}
        gmailLeft={28}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeShadowBox: {
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  homeChildPosition: {
    left: 23,
    position: "absolute",
  },
  fabLayout: {
    height: 56,
    position: "absolute",
  },
  gapBg: {
    backgroundColor: Color.materialThemeSysLightPrimaryContainer,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  fab1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  gap: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  backgroundCulling: {
    top: 0,
    left: -1,
    width: 56,
    display: "none",
  },
  gap1: {
    height: "121.43%",
    width: "121.43%",
    top: "-10.71%",
    right: "-10.71%",
    bottom: "-10.71%",
    left: "-10.71%",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 6,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  contentaddIcon: {
    width: 24,
    height: 24,
  },
  baseForeground: {
    flexDirection: "row",
    padding: Padding.p_base,
  },
  fab1: {
    marginTop: -28,
    marginLeft: -28.75,
    top: "50%",
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: Color.materialThemeSysLightPrimaryContainer,
    borderRadius: Border.br_base,
    position: "absolute",
    width: 58,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  fab: {
    top: 842,
    left: 351,
    width: 58,
  },
  home: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 20,
    elevation: 20,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default Home2;
