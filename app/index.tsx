import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Custombutton from "../components/customButton";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../context/GlobalProvider";

const Motv = () => {
  const { isLoading, isLogged } = useGlobalContext();

  if (!isLoading && isLogged)  return <Redirect href="/home" />;

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1  min-h-screen items-center justify-around ">
          <View className="gap-y-5 mt-4">
            <Image
              source={require("../assets/images/icon.png")}
              resizeMode="contain"
              className="w-24 h-24 mx-auto mb-4"
            />
            <View>
              <Image
                source={require("../assets/images/poster-film.png")}
                resizeMode="center"
                className=" max-w-full max-h-[150px] "
              />
              <Text className="text-xl font-montserrat text-center font-semibold text-secondary">
                Explore a world of captivating{" "}
                <Text className="text-primary font-bold">
                  Movies and TV shows!
                </Text>
              </Text>
            </View>
            <View className="mt-12 ">
              <Text className="text-lg font-montserrat text-center font-semibold text-secondary">
                <Text className="text-primary font-bold">Discover</Text> new
                favorites and binge on your favorite shows.
              </Text>
            </View>
          </View>
          <View className="gap-y-4 flex-1 justify-end">
            <Custombutton
              text="Get started"
              Handlepress={() => {
                return router.push("/sign-in");
              }}
            />
            <Text className="text-secondary text-center">&copy;Gunture17</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Motv;
