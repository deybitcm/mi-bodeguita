import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Pantallas
import BalanceScreen from "./BalanceScreen.jsx";
import DebtScreen from "./DebtScreen.jsx";
import InventoryScreen from "./InventoryScreen.jsx";
import ExploreScreen from "./ExploreScreen.jsx";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Balance" component={BalanceScreen} />
      <Tab.Screen name="Deudas" component={DebtScreen} />
      <Tab.Screen name="Inventario" component={InventoryScreen} />
      <Tab.Screen name="Explorar" component={ExploreScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
