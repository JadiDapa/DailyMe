import React, { useState } from "react";
import ProfileHeader from "@/components/tabs/profile/ProfileHeader";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import FriendList from "@/components/tabs/profile/FriendList";
import Achievements from "@/components/tabs/profile/Achievements";

export const profileMenu = ["general", "friends", "achievements"];

const menuContent: Record<string, JSX.Element> = {
  general: <Text>General</Text>,
  friends: <FriendList />,
  achievements: <Achievements />,
};

export default function profile() {
  const [selectedMenu, setSelectedMenu] = useState("friends");

  function handleSelectMenu(menu: string) {
    setSelectedMenu(menu);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileHeader
        selectedMenu={selectedMenu}
        handleSelectMenu={handleSelectMenu}
      />
      {menuContent[selectedMenu]}
    </SafeAreaView>
  );
}
