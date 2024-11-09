import React, { useState } from "react";
import { Image, View, Text, ScrollView } from "react-native";

import MoviesSection from "../../components/moviesSection";
import MovieList from "@/components/MovieList";

export default function HomeScreen() {
  const [latestUpdate, setLatestUpdate] = useState([1, 2, 3, 4, 5]);
  const [trending, setTrending] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5]);

  // useEffect(() => {
  return (
    <View className="flex-1 ">
      <ScrollView>
        <View className="flex flex-row justify-center pt-4">
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            className="w-24 h-24 "
          />
        </View>
        <View>
          <MoviesSection title="Latest Update" data={latestUpdate} />
          <MovieList title="Upcoming" item={upcoming} />
          <MovieList title="Trending" item={trending} />
          <MovieList title="Top Rated" item={topRated} />
        </View>
      </ScrollView>
    </View>
  );
}
