import { habits } from "@/app/(root)/(tabs)";
import {
  View,
  Text,
  Pressable,
  FlatList,
  ProgressBarAndroidBase,
} from "react-native";
import { HabitCardProps } from "../home/HabitCard";
import { LinearGradient } from "expo-linear-gradient";

export default function Challenges() {
  return (
    <View className="mt-6 ">
      <View className="flex-row justify-between px-4">
        <Text className="text-lg font-cereal-medium">Challenges</Text>
        <Pressable>
          <Text className="text-primary font-cereal-medium">VIEW ALL</Text>
        </Pressable>
      </View>

      <FlatList
        data={habits}
        horizontal
        className="mt-2 ps-4"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item: habit }) => <ChallengeCard habit={habit} />}
      />
    </View>
  );
}

export function ChallengeCard({ habit }: HabitCardProps) {
  return (
    <LinearGradient
      colors={["#8288ff", "#000dff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="w-56 p-4 overflow-hidden bg-white h-36 me-3 rounded-2xl"
    >
      <Text className="text-2xl font-cereal-medium">🕑</Text>

      <Text className="mt-2 text-lg text-white font-cereal-medium">
        {habit.name}! {habit.icon}
      </Text>
      <Text className="mt-1 text-white font-cereal">{habit.target} km</Text>
    </LinearGradient>
  );
}
