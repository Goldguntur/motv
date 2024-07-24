import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import CustomInput from "@/components/customInput";
import Custombutton from "@/components/customButton";
import { router, Link } from "expo-router";

import { signIn, getCurrentUser } from "../../lib/appwrite";

import { useGlobalContext } from "../../context/GlobalProvider";

let passwordError = "";
let emailError = "";
const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email.length < 1) {
      emailError = "Please enter an email";
    } else if (!form.email.includes("@")) {
      emailError = "Please enter a valid email";
    } else {
      emailError = "";
    }

    if (form.password.length < 1) {
      passwordError = "Please enter a password";
    } else if (form.password.length < 8 || form.password.length > 218) {
      passwordError =
        "Password must be at least 8 characters and beetween 218 characters";
      passwordError = "";
    }
    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      if (error instanceof Error) {
        if (
          error.message ===
          "Invalid credentials. Please check the email and password."
        ) {
          Alert.alert("Error", "Invalid email or password");
        } else {
          console.log(error.message);
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="h-[70vh]  flex-1 items-center justify-around">
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            className="w-24 h-24 "
          />
          <View className="w-full flex-1 items-center justify-center gap-y-8">
            <Text className="font-medium text-xl font-montserrat">
              Log-in to Motv
            </Text>
            <View>
              <CustomInput
                title="Email"
                placeholder="Enter your email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                err={emailError}
                keyboardType="email-address"
              />
              <CustomInput
                title="Password"
                placeholder="Enter your password"
                value={form.password}
                err={passwordError}
                handleChangeText={(e) => setForm({ ...form, password: e })}
              />
            </View>
          </View>
          <View>
            <Custombutton
              text="Sign in"
              Handlepress={submit}
              IsLoading={isSubmitting}
            />
            <Text className="text-center mt-2">
              Don't have an account?{" "}
              <Link href="/(auth)/sign-up">
                <Text className="text-primary font-bold">Sign up</Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
