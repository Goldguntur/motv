import "../global.css";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const Custombutton = ({ text }: { text: string }) => {
  return (
    <View>
      <TouchableOpacity className="bg-primary p-2 rounded-md w-40">
        <Text className="text-secondary text-montserrat font-semibold text-center">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Custombutton;
