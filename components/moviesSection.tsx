import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

interface Props {
  data: any[];
  title?: string;
}

const MoviesSection = ({ data, title }: Props) => {
  if (!data || !Array.isArray(data)) return null;

  const [activeDotIndex, setActiveDotIndex] = useState(1);

  return (
    <View>
      <Text className="text-2xl  text-primary p-4 font-montserrat capitalize font-medium">
        {title}
      </Text>
      <Carousel
        data={data}
        renderItem={({ item }: { item: any[] }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.5}
        sliderWidth={width}
        itemWidth={width * 0.62}
        onSnapToItem={(index) => setActiveDotIndex(index)}
        activeAnimationType="spring"
        enableMomentum={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeDotIndex}
        containerStyle={{ paddingVertical: 10 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#f01e2c",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default MoviesSection;

interface MovieCardProps {
  item: any;
}

const MovieCard = ({ item }: MovieCardProps) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push("MovieDetail", { item })}
      >
        <Image
          source={require("../assets/images/tlotr.jpg")} // Menggunakan URL gambar dari item
          resizeMode="contain"
          style={{ width: width * 0.6, height: height * 0.4 }}
          className="rounded-3xl"
        />
      </TouchableOpacity>
    </View>
  );
};
