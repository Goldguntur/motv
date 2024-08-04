import React, { useState } from "react";
import { Image, View, Text, ScrollView } from "react-native";

import MoviesSection from "../../components/moviesSection";

// interface Movie {
//   id: number;
//   title: string;
//   image: string;
// }

export default function HomeScreen() {
  const [latestUpdate, setLatestUpdate] = useState([1, 2, 3]);

  // useEffect(() => {
  return (
    <View className="flex-1">
      <ScrollView>
        <View className="flex flex-row justify-center py-8">
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            className="w-24 h-24"
          />
        </View>
        <View>
          <MoviesSection title="Latest Update" data={latestUpdate} />
        </View>
      </ScrollView>
    </View>
  );
}
