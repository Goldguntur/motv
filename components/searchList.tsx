import {
  View,
  Text,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const movieTitle = "The Lord of the Rings: The Fellowship of the Ring";
const movieSynopsis =
  "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.";

interface searchListProps {
  searchList?: () => JSX.Element;
  item: any;
}

const SearchList = ({ item }: searchListProps) => {
  const navigation = useNavigation();
  return (
    <View>
      {item.map((item: any, index: any) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.push("MovieDetail", { item })}
        >
          <View
            className="bg-secondary flex-1 flex-row 
             overflow-hidden text-left rounded-xl  mb-9"
            style={{
              height: height * 0.3,
              width: width * 0.9,
              maxWidth: "100%",
            }}
          >
            <View className="w-2/5">
              <Image
                source={require("../assets/images/tlotr.jpg")}
                className="rounded-xl my-auto "
                resizeMode="center"
                style={{ width: width * 0.4, height: height * 0.3 }}
              />
            </View>
            <View className="w-3/5 pl-6 gap-2">
              <Text
                className=" font-montserratBold text-lg
             text-wrap  text-white"
              >
                {movieTitle.length > 25
                  ? movieTitle.slice(0, 25) + "..."
                  : movieTitle}
              </Text>
              <Text
                className=" font-montserrat  text-sm
             text-wrap  text-white"
              >
                {movieSynopsis.length > 120
                  ? movieSynopsis.slice(0, 120) + "..."
                  : movieSynopsis}
              </Text>
              <Text className=" font-montserratSemiBold m-1  text-right  text-2xl text-white">
                9.8/10
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SearchList;
