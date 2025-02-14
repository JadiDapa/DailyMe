import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  Switch,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { login2, mailIcon, lockIcon, eyeClosedIcon } from "@/constant/Images";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleSignIn() {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then(async (response) => {
    //     const user = response.user;
    //     console.log("User logged in:", user);
    //   })
    //   .catch((e) => console.log(e.message));
    router.push("/");
  }

  return (
    <SafeAreaView className="flex-1 bg-primary-500">
      <StatusBar backgroundColor="#3843FF" />

      <View className="p-4 py-3">
        <Image source={login2} className="w-full" resizeMode="contain" />
      </View>

      <View className="flex-1 p-6 pt-12 mt-6 bg-white rounded-t-[28px]">
        <View className="w-full ">
          <Text className="pt-1 text-5xl text-primary-500 font-cereal-medium">
            Login
          </Text>
          <Text className="mt-1 text-primary-500 font-cereal-medium">
            Please Sign In to Continue
          </Text>
        </View>
        <View className="gap-4 mt-6">
          <View className="relative flex flex-row gap-4 overflow-hidden rounded-full bg-primary-500/10 ">
            <Image
              source={mailIcon}
              className="absolute -translate-y-1/2 size-6 left-6 top-1/2"
            />
            <TextInput
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
              className="w-full h-full text-lg font-cereal ps-16"
            />
          </View>
          <View className="flex flex-row gap-4 overflow-hidden rounded-full bg-primary-500/10 ">
            <Image
              source={lockIcon}
              className="absolute -translate-y-1/2 size-6 left-6 top-1/2"
            />
            <TextInput
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              className="w-full h-full text-lg font-cereal ps-16"
            />
            <Image
              source={eyeClosedIcon}
              className="absolute -translate-y-1/2 size-6 right-6 top-1/2"
            />
          </View>
          <View className="flex-row items-center justify-between ">
            <Text className="pl-4 text-primary-500 font-cereal-medium">
              Remind Me Later
            </Text>
            <Switch className="h-10 " />
          </View>
        </View>

        <View>
          <Pressable
            onPress={handleSignIn}
            className="flex flex-row justify-center gap-2 p-4 mt-6 rounded-full bg-primary-500"
          >
            <Text className="text-xl text-white font-cereal-medium">
              Sign In
            </Text>
          </Pressable>

          <View className="flex flex-row items-center justify-center mt-4">
            <Text className=" text-slate-600 font-cereal">
              Dont have account?{" "}
            </Text>
            <Pressable onPress={() => router.push("/auth/sign-up")}>
              <Text className=" text-primary-500 font-cereal-bold">
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
