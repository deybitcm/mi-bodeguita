import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RevenueList from "../components/MovementList.jsx";
import { usePurchases } from "../Hooks/PurchasesCustomHook.js";

export default function InnerExpenseScreen() {
  const { sales, loadList } = usePurchases();

  return (
    <View style={styles.container}>
      <RevenueList items={sales} onRefresh={loadList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
