import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DebtHeader from "../components/DebtHeader.jsx";
import SaleAndPurchaseButtons from "../components/SaleAndPurchaseButtons.jsx";
import InnerRevenueScreen from "./InnerRevenueScreen.jsx";

export default function DebtScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DebtHeader />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyData}>
          <View style={{ flex: 1, width: "100%" }}>
            <InnerRevenueScreen />
          </View>
        </View>
        <View style={styles.bodyFooter}>
          <SaleAndPurchaseButtons />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC300",
  },
  body: {
    flex: 12,
    alignItems: "center",
    width: "100%",
  },
  bodyData: {
    width: "100%",
    flex: 7,
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyFooter: {
    marginVertical: 6,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    marginBottom: 10,
  },
});
