import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CategoryList from "./CategoryList.jsx";
import { useCategories } from "../Hooks/CategoriesCustomHook.js";

export default function ProductCategoriesFilter() {
  const { categories, loadList } = useCategories();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <MaterialCommunityIcons name="pencil-circle" size={35} color="black" />
      </View>
      <View style={styles.listContainer}>
        <CategoryList items={categories} onRefresh={loadList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
  },
  listContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
