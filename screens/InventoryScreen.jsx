import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ProductList from "../components/ProductList.jsx";
import { getProducts } from "../api.js";

export default function InventoryScreen() {
  const [products, setProducts] = useState([]);

  const loadList = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <View>
      <ProductList items={products} onRefresh={loadList} />
    </View>
  );
}
