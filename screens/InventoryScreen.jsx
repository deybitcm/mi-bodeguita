import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList.jsx";
import { getProducts } from "../api.js";

const ProductListComponent = () => {
  const [products, setProducts] = useState([]);

  const loadList = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadList();
  }, [InventoryScreen, ProductListComponent]);

  return <ProductList items={products} />;
};

export default function InventoryScreen() {
  return (
    <View>
      <ProductListComponent />
    </View>
  );
}
