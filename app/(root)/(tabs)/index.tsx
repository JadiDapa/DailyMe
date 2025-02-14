import DailyStatus from "@/components/tabs/home/DailyStatus";
import DateList from "@/components/tabs/home/DateList";
import HabitCard from "@/components/tabs/home/HabitCard";
import HomeHeader from "@/components/tabs/home/HomeHeader";
import { FlatList, SafeAreaView } from "react-native";

export const habits = [
  { icon: "🏋️", name: "WorkOut", progress: "8", target: "100" },
  { icon: "🍽️", name: "Cooking", progress: "6", target: "100" },
  { icon: "📚", name: "Reading", progress: "7", target: "100" },
  { icon: "💪", name: "Gym", progress: "9", target: "10" },
  { icon: "🏃‍♂️", name: "Running", progress: "7", target: "10" },
  { icon: "🎨", name: "Painting", progress: "5", target: "100" },
  { icon: "⚡️", name: "Electricity", progress: "9", target: "10" },
  { icon: "🏠", name: "Home", progress: "10", target: "100" },
  { icon: "💼", name: "Office", progress: "10", target: "100" },
];

export default function Home() {
  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={habits}
        numColumns={2}
        columnWrapperStyle={{ paddingHorizontal: 12 }}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <DateList />
            <DailyStatus />
          </>
        )}
        renderItem={({ item: habit }) => <HabitCard habit={habit} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
