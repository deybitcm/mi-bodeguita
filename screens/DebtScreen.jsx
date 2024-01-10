import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DebtHeader from "../components/DebtHeader.jsx";
import SaleAndPurchaseButtons from "../components/SaleAndPurchaseButtons.jsx";

export default function DebtScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DebtHeader />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyData}>
          <Text style={{ color: "#000" }}>Aqui va el listado de deudas</Text>
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
  },
  bodyData: {
    flex: 7,
    backgroundColor: "#fff",
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyFooter: {
    marginVertical: 6,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
});
