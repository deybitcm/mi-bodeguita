import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RevenueList from "../components/MovementList.jsx";
import { useSales } from "../Hooks/SalesCustomHook.js";

export default function InnerRevenueScreen() {
  const { sales, loadList } = useSales();

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
