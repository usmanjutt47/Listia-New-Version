import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function SignUp() {
  const handle = () => {
    router.push("/login");
  };
  return (
    <View style={styles.container}>
      <Text>SignUp Screen </Text>
      <TouchableOpacity style={styles.btn} onPress={handle}>
        <Text style={styles.txt}>SignUp</Text>
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
  btn: {
    width: "90%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#238832",
    borderRadius: 15,
    alignItems: "center",
  },
  txt: {
    fontSize: 16,
    color: "#fff",
  },
});
