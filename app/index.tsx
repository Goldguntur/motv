import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Custombutton from "../components/customButton";

const Motv = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1  h-screen items-center justify-around ">
          <View className="gap-y-5">
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
            <Custombutton text="Get started" />
            <Text className="text-secondary text-center">&copy;Gunture17</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Motv;
