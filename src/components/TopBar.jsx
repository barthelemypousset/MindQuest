import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.level}>Level 4</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progressFill}></View>
      </View>
      <Text style={styles.xp}>450 XP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E293B",
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  level: {
    color: "#facc15",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 8,
  },
  progressContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#334155",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    width: "60%",
    height: "100%",
    backgroundColor: "#facc15",
  },
  xp: {
    color: "#94a3b8",
    marginTop: 8,
    fontSize: 12,
  },
});
