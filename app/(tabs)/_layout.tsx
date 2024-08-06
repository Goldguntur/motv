import { StatusBar } from "expo-status-bar";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";

import HomeScreen from "./home";
import Search from "./search";
import Favorite from "./favorite";
import Setting from "./setting";
import MovieDetail from "./movieDetail";

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-semibold" : "font-regular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const homeStack = createNativeStackNavigator();

function HomeStack() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <homeStack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ headerShown: false }}
      />
    </homeStack.Navigator>
  );
}

const searchStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <searchStack.Navigator>
      <searchStack.Screen
        name="search"
        component={Search}
        options={{ headerShown: false }}
      />
      <searchStack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ headerShown: false }}
      />
    </searchStack.Navigator>
  );
}

const favoriteStack = createNativeStackNavigator();

function FavoriteStack() {
  return (
    <favoriteStack.Navigator>
      <favoriteStack.Screen
        name="favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <favoriteStack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ headerShown: false }}
      />
    </favoriteStack.Navigator>
  );
}

const settingStack = createNativeStackNavigator();

function SettingStack() {
  return (
    <settingStack.Navigator>
      <settingStack.Screen
        name="setting"
        component={Setting}
        options={{ headerShown: false }}
      />
    </settingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#f01e2c",
          tabBarInactiveTintColor: "#fff",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#121214",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 80,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
          component={HomeStack}
        />
        <Tab.Screen
          name="Search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.search}
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
          component={SearchStack}
        />
        <Tab.Screen
          name="Favorite"
          options={{
            title: "Favorite",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.favorite}
                color={color}
                name="Favorite"
                focused={focused}
              />
            ),
          }}
          component={FavoriteStack}
        />
        <Tab.Screen
          name="Setting"
          options={{
            title: "Setting",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.setting}
                color={color}
                name="Setting"
                focused={focused}
              />
            ),
          }}
          component={SettingStack}
        />
      </Tab.Navigator>
      <StatusBar backgroundColor="#161622" style="light" />
    </NavigationContainer>
  );
}
