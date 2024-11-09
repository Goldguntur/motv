import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

const Favorite = () => {
  const [favorite, setFavorite] = useState([1, 2, 3, 4, 5]);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-row justify-center pb-4 pt-4">
        <Image
          source={require("../../assets/images/icon.png")}
          resizeMode="contain"
          className="w-24 h-24 "
        />
      </View>
      <ScrollView>
        <View className="items-center">
          <Text className="text-3xl text-secondary font-montserratBold">
            Favorite
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface Props {
  title: string;
  item: any;
}

const FavoriteList = ({ title, item }: Props) => {
  <ScrollView className="w-full">
    <View>
      <Text>{title}</Text>
    </View>
    <View>
      {item.map((item: any, index: any) => (
        <TouchableWithoutFeedback key={index} className="px-2">
          <View className="flex ">
            <Image
              source={require("@/assets/images/tlotr.jpg")}
              resizeMode="contain"
              className="rounded-3xl"
              style={{ width: width * 0.33, height: height * 0.22 }}
            />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  </ScrollView>;
};

export default Favorite;
