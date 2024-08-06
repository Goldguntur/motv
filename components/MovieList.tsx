import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
  item: any;
}

const { width, height } = Dimensions.get("window");

const MovieList = ({ title, item }: Props) => {
  const navigation = useNavigation();
  const movieName = "The Lord of the Rings: The Fellowship of the Ring";

  return (
    <View className="mb-8 space-y-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl  text-primary p-4 font-montserrat capitalize font-medium">
          {title}
        </Text>
        <TouchableOpacity className="p-4">
          <Text className="text-secondary text-xl p-4 font-montserrat capitalize font-medium">
            see all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {item.map((item: any, index: any) => (
          <TouchableWithoutFeedback
            key={index}
            className="px-2"
            onPress={() => navigation.navigate("MovieDetail", { item })}
          >
            <View className="flex ">
              <Image
                source={require("../assets/images/tlotr.jpg")}
                resizeMode="contain"
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text>
                {movieName.length > 15
                  ? movieName.slice(0, 15) + "..."
                  : movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
