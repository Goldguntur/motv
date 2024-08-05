import React, { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { LogBox } from "react-native";
import { GlobalProvider } from "../context/GlobalProvider";
import Navigation from "../components/navigation/Navigation"; // Adjust path as needed

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

if (LogBox.ignoreAllLogs) {
  LogBox.ignoreAllLogs(true);
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
      console.log("Font loaded:", fontsLoaded);
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GlobalProvider>
  );
}
