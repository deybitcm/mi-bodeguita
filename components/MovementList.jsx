import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import MovementListItem from "./MovementListItem.jsx";

export default function SaleList({ items, onRefresh }) {
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
        keyExtractor={(item) => item.id_movimiento.toString()}
        renderItem={({ item }) => <MovementListItem venta={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
}
