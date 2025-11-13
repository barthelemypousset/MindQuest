import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import GamesScreen from "./screens/GamesScreen";
import InventoryScreen from "./screens/InventoryScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#1E293B",
            borderTopWidth: 0,
            height: 70,
          },
          tabBarActiveTintColor: "#facc15",
          tabBarInactiveTintColor: "#94a3b8",
        }}
      >
        <Tab.Screen name="Progression" component={HomeScreen} />
        <Tab.Screen name="Games" component={GamesScreen} />
        <Tab.Screen name="Inventory" component={InventoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
