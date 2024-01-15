import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RevenueList from "../components/MovementList.jsx";
import { usePurchases } from "../Hooks/PurchasesCustomHook.js";

export default function InnerExpenseScreen() {
  const { purchases, loadList } = usePurchases();

  return (
    <View style={styles.container}>
      <RevenueList items={purchases} onRefresh={loadList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
