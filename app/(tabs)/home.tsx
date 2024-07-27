import { useState } from "react";
import { Image, Platform, View, Text, ScrollView } from "react-native";

import MoviesSection from "../../components/moviesSection";
export default function HomeScreen() {
  const [latestUpdate, setLatestUpdate] = useState([1, 2, 3]);
  return (
    <View className="flex-1 ">
      <ScrollView>
        <View className="flex flex-row justify-center  fixed w-screen z-10 py-8">
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            className="w-24 h-24"
          />
        </View>
        <View>
          <MoviesSection data={latestUpdate} />
        </View>
      </ScrollView>
    </View>
  );
}
