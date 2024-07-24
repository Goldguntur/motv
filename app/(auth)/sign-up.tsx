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
import { Link, router } from "expo-router";
import CustomInput from "../../components/customInput";
import Custombutton from "../../components/customButton";

import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

let passwordError = "";
let emailError = "";
let usernameError = "";
const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (form.username.length < 1) {
      usernameError = "Please enter a username";
    } else if (form.username.length < 3) {
      usernameError = "Username must be at least 3 characters";
    } else {
      usernameError = "";
    }

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

    console.log(passwordError);
    setSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="h-[70vh]  flex-1 items-center justify-between">
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            className="w-24 h-24 "
          />
          <View className="w-full flex-1 items-center justify-center gap-y-8">
            <Text className="font-medium text-xl font-montserrat">
              Sign Up to Motv
            </Text>
            <View>
              <CustomInput
                title="Email"
                placeholder="Enter your email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
                err={emailError}
              />
              <CustomInput
                title="Username"
                placeholder="Enter your username"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-7"
                keyboardType="username"
                err={usernameError}
              />
              <CustomInput
                title="Password"
                placeholder="Enter your password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
                err={passwordError}
              />
            </View>
          </View>
          <View>
            <Custombutton
              text="Sign up"
              Handlepress={submit}
              IsLoading={isSubmitting}
            />
            <Text className="text-center mt-2">
              Already have an account?{" "}
              <Link href="/(auth)/sign-in">
                <Text className="text-primary font-bold">Sign in</Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
