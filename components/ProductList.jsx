import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductItem from "./ProductItem.jsx";

const ProductList = ({ items }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id_producto.toString()}
      renderItem={({ item }) => <ProductItem producto={item} />}
    />
  );
};

export default ProductList;
