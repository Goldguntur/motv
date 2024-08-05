import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Stack as ExpoRouterStack } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme"; // Adjust path as needed

import Tabs from "../../app/(tabs)/_layout";
import Auth from "../../app/(auth)/_layout";
import Index from "../../app/index";
import detail from "../../app/(tabs)/movieDetail";

// Create the stack navigator
const Stack = createStackNavigator();

const Navigation = () => {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={Index} />
      <Stack.Screen name="(tabs)" component={Tabs} />
      <Stack.Screen name="(auth)" component={Auth} />
      <Stack.Screen name="movieDetail" component={detail} />
    </Stack.Navigator>
  );
};
export default Navigation;
