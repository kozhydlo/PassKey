const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Rectangle from "./screens/Rectangle";
import Add from "./screens/Add";
import Add1 from "./screens/Add1";
import End from "./screens/End";
import Home1 from "./screens/Home1";
import Home2 from "./screens/Home2";
import SignIn from "./screens/SignIn";
import Code from "./screens/Code";
import Signup from "./screens/Signup";
import LaunchScreen from "./screens/LaunchScreen";
import Sitings from "./screens/Sitings";
import TypeDefaultValueNoLabel from "./components/TypeDefaultValueNoLabel";
import SliderComponentActiveBar from "./components/SliderComponentActiveBar";
import SliderComponentsBar from "./components/SliderComponentsBar";
import StateActive from "./components/StateActive";
import StateDefaultIconFalse from "./components/StateDefaultIconFalse";
import StateDefaultIconTrueImage from "./components/StateDefaultIconTrueImage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "Jost-Medium": require("./assets/fonts/Jost-Medium.ttf"),
    "Jost-SemiBold": require("./assets/fonts/Jost-SemiBold.ttf"),
    "Jost-Bold": require("./assets/fonts/Jost-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle"
              component={Rectangle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add"
              component={Add}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add1"
              component={Add1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="End"
              component={End}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Code"
              component={Code}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaunchScreen"
              component={LaunchScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sitings"
              component={Sitings}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};

export default App;
