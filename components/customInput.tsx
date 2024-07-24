import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import icons from "@/constants/icons";

interface CustomInputProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  err?: string;
  [props: string]: any;
}

const CustomInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  err,
  ...props
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="space-y-2 w-[90%]">
      <Text
        className={`text-base font-medium ${
          err ? "text-primary" : "text-secondary"
        }`}
      >
        {title}
      </Text>

      <View
        className={`w-full h-16 px-4 bg-black-100 ${
          err ? "border-primary" : "border-secondary"
        } rounded-2xl border-2 border-black-200  flex flex-row items-center`}
      >
        <TextInput
          className="flex-1 text-secondary font-montserrat font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#121214"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              tintColor={"#f01e2c"}
              className="w-8 h-8"
            />
          </TouchableOpacity>
        )}
      </View>
      <Text className={`text-base font-medium text-red-500`}>{err}</Text>
    </View>
  );
};

export default CustomInput;
