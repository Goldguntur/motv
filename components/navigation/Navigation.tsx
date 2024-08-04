import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../../app/(tabs)/movieDetail";
import Home from "../../app/(tabs)/home";

export type RootStackParams = {
  Home: undefined;
  Detail: any;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
export default Navigation;
