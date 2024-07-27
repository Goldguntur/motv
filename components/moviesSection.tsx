import { View, Text, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import React from "react";

interface Props {
  data: any[];
}
const MoviesSection = ({ data }: Props) => {
  if (!data || !Array.isArray(data)) return null;
  return (
    <View>
      <Carousel
        data={data}
        renderItem={({ item }: { item: any[] }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.5}
        sliderWidth={600}
        itemWidth={200}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

export default MoviesSection;

const MovieCard = ({ item }: { item: any[] }) => {
  return (
    <View>
      <Image
        source={require("../assets/images/poster-film.png")}
        resizeMode="contain"
        className="w-44 h-64"
      />
    </View>
  );
};
