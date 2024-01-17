import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DebtHeader from "../components/DebtHeader.jsx";
import SaleAndPurchaseButtons from "../components/SaleAndPurchaseButtons.jsx";
import InnerRevenueScreen from "./InnerRevenueScreen.jsx";

export default function DebtScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <DebtHeader />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyData}>
          <View style={{ flex: 1, width: "100%" }}>
            <InnerRevenueScreen />
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <SaleAndPurchaseButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC300",
  },
  bodyContainer: {
    flex: 7,
    alignItems: "center",
    width: "100%",
  },
  bodyData: {
    flex: 1,
    width: "100%",
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
