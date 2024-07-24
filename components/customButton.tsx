import "../global.css";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface CustomButtonProps {
  text: string;
  Handlepress: (event: any) => void;
  IsLoading?: boolean;
}

const Custombutton = ({ text, Handlepress, IsLoading }: CustomButtonProps) => {
  return (
    <View className="w-[90vw]">
      <TouchableOpacity
        className={`bg-primary py-3 rounded-md w-full ${
          IsLoading ? "opacity-50" : ""
        } `}
        onPress={Handlepress}
        disabled={IsLoading}
      >
        <Text className="text-secondary text-montserrat  text-center text-xl font-medium">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Custombutton;
