import { View, Text, Image, Pressable, SafeAreaView } from "react-native";
import React from "react";
import {
  appleIcon,
  circle,
  facebookIcon,
  googleIcon,
  gradient,
  login1,
  loginIcon,
} from "@/constant/Images";
import { useRouter } from "expo-router";

export default function Auth() {
  const router = useRouter();

  return (
    <SafeAreaView className="relative flex flex-1 p-6 bg-primary-500">
      <Image source={gradient} className="absolute -top-12 -left-12 size-96" />
      <Image
        source={gradient}
        className="absolute rotate-180 -bottom-12 -right-12 size-96"
      />
      <Image
        source={circle}
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-96"
      />
      <View className="">
        <Image source={login1} className="size-96" />
        <View className="mt-4">
          <Text className="pt-1 text-5xl text-white font-cereal-bold">
            Create {"\n"}Good Habits
          </Text>
          <Text className="mt-3 text-white font-cereal">
            Change your life by slowly adding new healthy habits and sticking to
            them
          </Text>
        </View>
        <View className="flex flex-row gap-4 mt-6">
          <View className="w-1.5 h-1.5 bg-white rounded-full " />
          <View className="w-1.5 h-1.5 bg-white/50 rounded-full " />
          <View className="w-1.5 h-1.5 bg-white/50 rounded-full " />
        </View>
        <View>
          <Pressable
            onPress={() => router.push("/auth/sign-in")}
            className="flex flex-row justify-center gap-2 p-5 mt-6 overflow-hidden bg-white rounded-full"
          >
            <Image source={loginIcon} className="" />
            <Text className="font-cereal-medium">Continue with E-Mail</Text>
          </Pressable>
          <View className="flex flex-row justify-between mt-4">
            <Pressable className="flex flex-row items-center gap-1 px-4 py-2 bg-white rounded-full">
              <Image source={appleIcon} className="" />
              <Text className="font-cereal-medium">Apple</Text>
            </Pressable>
            <Pressable className="flex flex-row items-center gap-1 px-4 py-2 bg-white rounded-full">
              <Image source={googleIcon} className="" />
              <Text className="font-cereal-medium">Google</Text>
            </Pressable>
            <Pressable className="flex flex-row items-center gap-1 px-4 py-2 bg-white rounded-full">
              <Image source={facebookIcon} className="" />
              <Text className="font-cereal-medium">Facebook</Text>
            </Pressable>
          </View>
          <Text className="mt-4 text-xs text-center text-white/50 font-cereal">
            By continuing you agree Terms of Services & Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
