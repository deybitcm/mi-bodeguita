import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function InventoryHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.sideContainer}>
        <Text style={styles.titleText}>Total de referencias</Text>
        <Text style={styles.numberText}>10</Text>
      </View>
      <View style={styles.sideContainer}>
        <Text style={styles.titleText}>Costo total</Text>
        <Text style={styles.numberText}>S/. 0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  sideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  numberText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
