import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={handleOpenDrawer}
        style={{ marginTop: 50, backgroundColor: "red" }}
      >
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
