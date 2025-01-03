import React from "react";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function DrawerComponent() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#238A34",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
        drawerActiveTintColor: "#FDFDFD",
        drawerInactiveTintColor: "#333",
        drawerActiveBackgroundColor: "#333",
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation: "slide",
        drawerItemStyle: {
          borderRadius: 0,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={focused ? "#FDFDFD" : "#333"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CompleteList"
        options={{
          drawerLabel: "Complete List",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="list"
              size={size}
              color={focused ? "#FDFDFD" : "#333"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="person"
              size={size}
              color={focused ? "#FDFDFD" : "#333"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Subscription"
        options={{
          drawerLabel: "Subscription",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="card"
              size={size}
              color={focused ? "#FDFDFD" : "#333"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        options={{
          drawerLabel: "Contact Us",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="call"
              size={size}
              color={focused ? "#FDFDFD" : "#333"}
            />
          ),
        }}
      />
    </Drawer>
  );
}
