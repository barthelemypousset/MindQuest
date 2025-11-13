import React from "react";
import { View, Image, StyleSheet, SafeAreaView, Text } from "react-native";
import TopBar from "../components/TopBar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.mapContainer}>
        <Image source={require("../../assets/main.png")} style={styles.map} resizeMode="cover" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  mapContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
