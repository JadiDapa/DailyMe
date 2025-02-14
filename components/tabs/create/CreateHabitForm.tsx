import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { checkIcon, randomColor } from "@/constant/Images";

export default function CreateHabitForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const days = [
    { day: "MO", isChecked: true },
    { day: "TU", isChecked: false },
    { day: "WE", isChecked: false },
    { day: "TH", isChecked: false },
    { day: "FR", isChecked: false },
    { day: "SA", isChecked: false },
    { day: "SU", isChecked: false },
  ];

  return (
    <View className="gap-4 px-4 mt-6 mb-24">
      <View className="relative ">
        <Text className="font-cereal-medium">NAME</Text>
        <TextInput
          placeholder="Habit Name"
          onChangeText={(value) => setEmail(value)}
          className="w-full mt-2 text-xl border-b font-cereal-medium"
        />
      </View>
      <View className="relative mt-4">
        <Text className="font-cereal-medium">ICON & COLOR</Text>
        <View className="flex-row gap-4 mt-2">
          <View className="flex-row flex-1 gap-4 p-4 bg-white shadow-md rounded-xl">
            <View className="items-center justify-center bg-primary/20 rounded-xl size-12">
              <Text>🚶</Text>
            </View>
            <View>
              <Text className="font-cereal-medium">Walking</Text>
              <Text>Icon</Text>
            </View>
          </View>
          <View className="flex-row flex-1 gap-4 p-4 bg-white shadow-md rounded-xl">
            <View className="items-center justify-center overflow-hidden bg-primary/20 rounded-xl size-12">
              <Image source={randomColor} className="w-full h-full" />
            </View>
            <View>
              <Text className="font-cereal-medium">Random</Text>
              <Text>Color</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="relative mt-4">
        <Text className="font-cereal-medium">DESCRIBE</Text>
        <View className="flex-row gap-4 p-4 mt-2 bg-white shadow-md rounded-xl">
          <TextInput
            placeholder="Describe Habit Detail"
            onChangeText={(value) => setEmail(value)}
            className="w-full mt-2 border-b font-cereal"
          />
        </View>
      </View>
      <View className="relative mt-4">
        <Text className="font-cereal-medium">QUANTITY & UNIT</Text>
        <View className="flex flex-row gap-4 p-4 mt-2 bg-white shadow-md rounded-xl">
          <TextInput
            placeholder="Quantity"
            onChangeText={(value) => setEmail(value)}
            className="flex-1 mt-2 border-b font-cereal"
          />
          <TextInput
            placeholder="Unit"
            onChangeText={(value) => setEmail(value)}
            className="flex-1 mt-2 border-b font-cereal"
          />
        </View>
      </View>
      <View className="relative mt-4">
        <Text className="font-cereal-medium">DURATION</Text>
        <View className="flex flex-row gap-2 mt-2 ">
          <View className="flex-1 p-4 shadow-md rounded-xl bg-primary/80">
            <Text className="text-center text-white font-cereal">A Day</Text>
          </View>
          <View className="flex-1 p-4 bg-white shadow-md rounded-xl text-primary">
            <Text className="text-center font-cereal">7 Days</Text>
          </View>
          <View className="flex-1 p-4 bg-white shadow-md rounded-xl text-primary">
            <Text className="text-center font-cereal">Custom</Text>
          </View>
        </View>
      </View>
      <View className="relative mt-4">
        <Text className="font-cereal-medium">QUANTITY & UNIT</Text>
        <FlatList
          data={days}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <Pressable
              key={item.day}
              className={`items-center justify-between w-14 h-20 py-2 mx-1   rounded-xl ${
                item.isChecked ? "bg-primary/30" : "bg-white"
              }`}
            >
              <Text className="text-lg fontext-center font-cereal">
                {item.day}
              </Text>
              {item.isChecked && (
                <Image className="size-6" source={checkIcon} />
              )}
            </Pressable>
          )}
        />
      </View>

      <Pressable
        className="w-full py-4 mt-6 rounded-full bg-primary"
        onPress={() => {}}
      >
        <Text className="text-xl text-center text-white font-cereal-bold">
          Create Habit
        </Text>
      </Pressable>
    </View>
  );
}
