import React from "react";
import { View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView children {...props} scrollEnabled={false}>
        <DrawerItemList {...props} />

        <DrawerItem label={"Logout"} onPress={() => router.replace("/")} />
      </DrawerContentScrollView>
    </View>
  );
}
