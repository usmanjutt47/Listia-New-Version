import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Login() {
  const [activeInput, setActiveInput] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.backgroundContainer}>
        <Image
          source={require("../../../assets/images/login.png")}
          style={styles.image}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          <View
            style={[
              styles.inputContainer,
              activeInput === "email"
                ? styles.activeInput
                : styles.inactiveInput,
            ]}
          >
            <Feather
              name="mail"
              size={24}
              color={activeInput === "email" ? "#2DA144" : "#838383"}
              style={styles.icon}
            />
            <TextInput
              placeholder="Email Address"
              onFocus={() => setActiveInput("email")}
              onBlur={() => setActiveInput(null)}
              style={styles.textInput}
              placeholderTextColor={
                activeInput === "email" ? "#2DA144" : "#838383"
              }
            />
          </View>
          <View
            style={[
              styles.inputContainer,
              activeInput === "password"
                ? styles.activeInput
                : styles.inactiveInput,
            ]}
          >
            <FontAwesome
              name="unlock-alt"
              size={24}
              color={activeInput === "password" ? "#2DA144" : "#838383"}
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              onFocus={() => setActiveInput("password")}
              onBlur={() => setActiveInput(null)}
              style={styles.textInput}
              placeholderTextColor={
                activeInput === "password" ? "#2DA144" : "#838383"
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  backgroundContainer: {
    backgroundColor: "#2DA144",
    width: "100%",
    height: "45%",
    borderBottomLeftRadius: 86,
    borderBottomRightRadius: 86,
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  innerContainer: {
    paddingTop: 30,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  inputContainer: {
    paddingLeft: 10,
    borderRadius: 48,
    width: "100%",
    marginTop: "3%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
  },
  activeInput: {
    borderWidth: 1,
    borderColor: "#2DA144",
  },
  inactiveInput: {
    backgroundColor: "#F2F2F2",
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginRight: 10,
  },
});
