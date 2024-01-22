import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import InputField from "./ProductInputField.jsx";
import ProductCategoriesFilter from "./ProductCategoriesFilter.jsx";

export default function InventoryBodyHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField />
        <View style={styles.downloadImageContainer}>
          <AntDesign name="download" size={24} color="black" />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <ProductCategoriesFilter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  filterContainer: {
    flex: 1,
    justifyContent: "center",
  },
  downloadImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 40,
    alignSelf: "center",
  },
});
