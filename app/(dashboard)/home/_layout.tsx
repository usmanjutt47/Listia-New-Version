import React from "react";
import { Drawer } from "expo-router/drawer";

export default function DrawerComponent() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="CompleteList"
        options={{
          drawerLabel: "CompleteList",
          title: "CompleteList",
        }}
      />
    </Drawer>
  );
}
