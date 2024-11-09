import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import MovieList from "@/components/MovieList";

const { width, height } = Dimensions.get("window");

interface itemData {
  id: string;
  title: string;
  image: any;
  description: string;
  realeseDate: string;
  actors: string[];
  genres: string[];
}

const DATA: itemData = {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  title: "First Item",
  image: require("../../assets/images/tlotr.jpg"),
  description:
    "Set in Middle-earth, the story tells of the Dark Lord Sauron, who seeks the One Ring, which contains part of his might, to return to power. The Ring has found its way to the young hobbit Frodo Baggins",
  realeseDate: "2001-12-19",
  actors: ["actor 1", "actor 2", "actor 3", "actor 4"],
  genres: ["action", "adventure", "fantasy"],
};

const MovieDetail = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const tittle = "the lord of the rings the fellowship of the ring";
  const { params: item } = useRoute();
  const navigation = useNavigation();
  useEffect(() => {}, [item]);

  return (
    <SafeAreaView className="w-full">
      <View className="z-20  flex-row  justify-between items-center w-full px-4 py-2 top-0 fixed">
        <TouchableOpacity
          className="rounded-xl border p-1 w-10 h-10 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size="30" color="black" strokeWidth={2.5} />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/icon.png")}
          className="max-w-full my-auto mx-auto"
          resizeMode="center"
          style={{ height: height * 0.04 }}
        />
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <HeartIcon
            size="30"
            color={isFavorite ? "red" : "black"}
            strokeWidth={2.5}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        className="px-1"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <View className="w-full flex  justify-center my-6  items-center gap-4">
          <Image
            source={DATA.image}
            resizeMode="contain"
            style={{ width: width * 0.5, height: height * 0.3 }}
          />
          <Text className="text-2xl font-montserrat text-center font-semibold text-secondary">
            {tittle}
          </Text>
          <Text className="text-lg font-montserrat text-center font-semibold text-secondary"></Text>
        </View>
        <View className="w-full flex  mt-4   gap-3">
          <Text className="font-montserrat">
            <Text className=" font-semibold text-lg text-secondary ">
              Description :
            </Text>{" "}
            {DATA.description}
          </Text>
          <Text className="font-montserrat">
            <Text className=" font-semibold text-lg text-secondary ">
              Realese Date :
            </Text>{" "}
            {DATA.realeseDate}
          </Text>
          <Text className="font-montserrat">
            <Text className=" font-semibold text-lg text-secondary ">
              Genres :
            </Text>{" "}
            {DATA.genres.map((genre) => (
              <Text key={genre} className=" text-secondary">
                <TouchableOpacity>
                  <Text>{genre}</Text>
                </TouchableOpacity>{" "}
                +{" "}
              </Text>
            ))}
          </Text>
          <Text className="font-montserrat">
            <Text className=" font-semibold text-lg text-secondary ">
              Actors :
            </Text>{" "}
            {DATA.actors.map((actor) => (
              <Text key={actor} className=" text-secondary">
                <TouchableOpacity
                  onPress={() => navigation.push("person", { actor })}
                >
                  <Text>{actor}</Text>
                </TouchableOpacity>{" "}
                +{" "}
              </Text>
            ))}
          </Text>
        </View>
        <View className="w-full flex  mt-24  gap-3">
          <MovieList title="Similar Movies" item={[1, 2, 3, 4, 5]} />
        </View>
        <View className="w-full flex  mt-4 pb-4  gap-3">
          <MovieList title="You May Also Like" item={[1, 2, 3, 4, 5]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;
