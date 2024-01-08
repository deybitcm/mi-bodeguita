import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DateFilterBar from "../components/DateFilterBar";

export default function BalanceScreen() {
  const handleFilterChange = (filter) => {
    // console.log(filter);
  };

  return (
    <View>
      <DateFilterBar onFilterChange={handleFilterChange}></DateFilterBar>
      <Text>BalanceScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
