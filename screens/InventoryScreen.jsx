import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList.jsx";
import { useProducts } from "../Hooks/ProductsCustomHook.js";

export default function InventoryScreen() {
  const { products, loadList } = useProducts();

  return (
    <View>
      <ProductList items={products} onRefresh={loadList} />
    </View>
  );
}
