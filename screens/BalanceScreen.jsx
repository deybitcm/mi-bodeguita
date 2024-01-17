import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Headers
import DateFilterBar from "../components/DateFilterBar.jsx";
import MovementsHeader from "../components/MovementsHeader.jsx";

// import { getPurchases } from "../api.js";

// Pantallas y componentes
import BalanceSummary from "../components/BalanceSummary.jsx";
import InnerRevenueScreen from "./InnerRevenueScreen.jsx";
import InnerExpenseScreen from "./InnerExpenseScreen.jsx";

// Footer
import SaleAndPurchaseButtons from "../components/SaleAndPurchaseButtons.jsx";

// BottomSheet
import SaleBottomSheet from "../components/SaleBottomSheet.jsx";

const Stack = createNativeStackNavigator();

export default function BalanceScreen({ navigation }) {
  const [typeOfMovement, setTypeOfMovement] = useState("ventas"); // Valor inicial

  const handleTypeChange = (type) => {
    setTypeOfMovement(type);
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ flex: 1 }}>
        <DateFilterBar onFilterChange={handleTypeChange} />
      </View>
      <View style={{ flex: 12 }}>
        <View style={{ flex: 4 }}>
          <BalanceSummary />
        </View>
        <View style={{ flex: 8 }}>
          <View style={{ flex: 2 }}>
            <MovementsHeader
              filter={typeOfMovement}
              onTypeChange={handleTypeChange}
              navigation={navigation}
            />
          </View>
          <View style={{ flex: 8 }}>
            <Stack.Navigator
              screenOptions={() => ({
                headerShown: false,
              })}
              initialRouteName="Revenues"
            >
              <Stack.Screen name="Revenues" component={InnerRevenueScreen} />
              <Stack.Screen name="Expenses" component={InnerExpenseScreen} />
            </Stack.Navigator>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, paddingBottom: 20, paddingTop: 15 }}>
        <SaleAndPurchaseButtons />
      </View>
    </View>
  );
}
