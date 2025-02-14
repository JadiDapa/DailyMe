import { ScrollView } from "react-native";
import React from "react";
import CreateHeader from "@/components/tabs/create/CreateHeader";
import CreateHabitForm from "@/components/tabs/create/CreateHabitForm";

export default function Create() {
  return (
    <ScrollView>
      <CreateHeader />
      <CreateHabitForm />
    </ScrollView>
  );
}
