import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const { height, width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../assets/splash1.png"),
    title: "Create and Share",
    subTitle: "Share shopping lists with family and friends",
  },
  {
    id: 2,
    image: require("../assets/splash2.png"),
    title: "Welcome to Listia",
    subTitle:
      "Make your shopping the easiest and fastest, in advance by making a list of your products with Listia",
  },
  {
    id: 3,
    image: require("../assets/splash3.png"),
    title: "Smart Categorization",
    subTitle:
      "Make your shopping easier with automatic grouping of products by category",
  },
];

const responsiveFontSize = (size: number) => {
  const scale = width / 375;
  return Math.round(size * scale);
};

export default function MainSplash() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      router.push("/login");
    }
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.slide}>
        <Image source={currentSlide.image} style={styles.image} />
        <Text style={styles.title}>{currentSlide.title}</Text>
        <Text style={styles.subTitle}>{currentSlide.subTitle}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn} onPress={goToNextSlide}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    color: "#282534",
    fontSize: responsiveFontSize(24),
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
  subTitle: {
    fontSize: responsiveFontSize(12),
    color: "#8D98AF",
    maxWidth: "80%",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "regular",
  },
  footer: {
    height: height * 0.25,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  indicator: {
    height: 3.5,
    width: 30,
    backgroundColor: "grey",
    marginHorizontal: 1,
    borderRadius: 3,
  },
  activeIndicator: {
    backgroundColor: "#248B34",
    width: 25,
  },
  buttonContainer: {
    marginBottom: "10%",
  },
  btn: {
    padding: 15,
    backgroundColor: "#248B34",
    borderRadius: 30,
    alignItems: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: responsiveFontSize(16),
  },
});
