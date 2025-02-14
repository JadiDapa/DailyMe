import { View, Text } from "react-native";
import React from "react";

export default function HomeHeader() {
  return (
    <View className="p-6 bg-white shadow-md">
      <View className="flex-row justify-between">
        <View className="items-center justify-center border border-slate-300 size-12 rounded-xl">
          <Text>CA</Text>
        </View>

        <View className="items-center justify-center border border-slate-300 size-12 rounded-xl">
          <Text>BL</Text>
        </View>
      </View>
      <View className="flex-row items-center justify-between mt-4">
        <View>
          <Text className="text-2xl text-primary font-cereal-medium">
            Hi, Daffa
          </Text>
          <Text className="font-cereal">Let's make habits together!</Text>
        </View>
        <View className="items-center justify-center rounded-full bg-primary size-12 ">
          <Text className="text-white font-cereal">DP</Text>
        </View>
      </View>
      <View className="flex flex-row p-0.5 mt-4 rounded-full bg-slate-300">
        <View className="flex-1 py-1.5 bg-white rounded-full">
          <Text className="text-center font-cereal-medium text-primary">
            Today
          </Text>
        </View>
        <View className="flex-1 py-1.5 rounded-full ">
          <Text className="text-center font-cereal-medium">Clubs</Text>
        </View>
      </View>
    </View>
  );
}
