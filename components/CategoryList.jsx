import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import React, { useState } from "react";
import { useRefresh } from "../Hooks/RefreshingCustomHook.js";
import CategoryListItem from "./CategoryListItem.jsx";

export default function CategoryList({ items, onRefresh }) {
  const { refreshing, handleRefresh } = useRefresh(onRefresh);
  const [currentPressed, setCurrentPressed] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={items}
        keyExtractor={(item) => item.id_cat_producto.toString()}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            isPressed={currentPressed === item.id_cat_producto}
            onPress={() => setCurrentPressed(item.id_cat_producto)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
});
