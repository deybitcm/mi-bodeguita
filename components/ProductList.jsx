import { View, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import ProductItem from "./ProductItem.jsx";

const ProductList = ({ items, onRefresh }) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id_producto.toString()}
        renderItem={({ item }) => <ProductItem producto={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default ProductList;
