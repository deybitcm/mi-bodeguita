import { View, Text } from "react-native";
import React from "react";
import NewSaleButton from "./NewSaleButton.jsx";
import NewPurchaseButton from "./NewPurchaseButton.jsx";

export default function SaleAndPurchaseButtons() {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NewSaleButton />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NewPurchaseButton />
      </View>
    </View>
  );
}
