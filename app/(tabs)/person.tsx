import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import MovieList from "@/components/MovieList";

const Person = ({ name }: { name?: string }) => {
  return (
    <SafeAreaView className="w-full ">
      <View>
        <Text>{name}</Text>
      </View>
      <ScrollView>
        <MovieList title="films:" item={[1, 2, 3, 4, 5]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Person;
