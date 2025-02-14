import {
  homeIcon,
  medalIcon,
  plusIcon,
  searchIcon,
  userFillIcon,
} from "@/constant/Images";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}) => (
  <View className="flex flex-col items-center flex-1 mt-3">
    <Image
      source={icon}
      tintColor={focused ? "#0061FF" : "#666876"}
      resizeMode="contain"
      className="size-6"
    />
    <Text
      className={`${
        focused ? "text-primary font-cereal-medium" : "text-black font-cereal"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const MainTabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}) => (
  <View
    className="items-center justify-center rounded-full bg-primary"
    style={{
      width: 58,
      height: 58,
      backgroundColor: focused ? "#e2e5e9" : "#0061FF",
    }}
  >
    <Image
      source={icon}
      tintColor={focused ? "#0061FF" : "#e2e5e9"}
      resizeMode="contain"
      className="size-8"
    />
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 64,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={homeIcon} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={searchIcon} title="Discover" />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MainTabIcon focused={focused} icon={plusIcon} title="Create" />
          ),
        }}
      />
      <Tabs.Screen
        name="challange"
        options={{
          title: "Challange",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={medalIcon} title="Challange" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={userFillIcon} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
