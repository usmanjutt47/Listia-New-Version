import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Login() {
  const handle = () => {
    router.push("/home");
  };

  const handleForgot = () => {
    router.push("/forgot-password");
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen </Text>
      <TouchableOpacity style={styles.btn} onPress={handle}>
        <Text style={styles.txt}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgot} style={{ marginTop: 50 }}>
        <Text>Forgot your password?</Text>
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
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#238832",
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  txt: {
    fontSize: 16,
    color: "#fff",
  },
});
