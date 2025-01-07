import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { faker } from "@faker-js/faker";

const generateFakeData = () => {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    picture: faker.image.avatar(),
  };
};

export default function Home() {
  const navigation = useNavigation();

  const fakeData = generateFakeData();

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <TouchableOpacity onPress={handleOpenDrawer} style={styles.drawerButton}>
        <Text style={styles.drawerButtonText}>Open Drawer</Text>
      </TouchableOpacity>
      <Image source={{ uri: fakeData.picture }} style={styles.image} />
      <Text style={styles.label}>
        Name: <Text style={styles.value}>{fakeData.name}</Text>
      </Text>
      <Text style={styles.label}>
        Email: <Text style={styles.value}>{fakeData.email}</Text>
      </Text>
      <Text style={styles.label}>
        Address: <Text style={styles.value}>{fakeData.address}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  drawerButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  drawerButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 99,
    margin: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontWeight: "normal",
  },
});
