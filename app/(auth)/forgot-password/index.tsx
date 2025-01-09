import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Link href={"/forgot-password"}>go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
