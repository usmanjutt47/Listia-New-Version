import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="aplha-list/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="alpha-a-box"
              color={color}
              size={size}
            />
          ),
          title: "Alpha List",
        }}
      />
    </Tabs>
  );
}
