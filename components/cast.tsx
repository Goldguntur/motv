import { View, Text, ScrollView } from "react-native";
import React from "react";

const characterName = "dwayne jhonson";

const Cast = () => {
  return (
    <View className="my-6">
      <Text className="text-xl font-bold font-montserrat">Cast</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Text>
          {characterName.length > 10
            ? characterName.slice(0, 10) + "..."
            : characterName}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Cast;
