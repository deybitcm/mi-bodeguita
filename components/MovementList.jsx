import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import MovementListItem from "./MovementListItem.jsx";
import { useRefresh } from "../Hooks/RefreshingCustomHook.js";

export default function MovementList({ items, onRefresh }) {
  const { refreshing, handleRefresh } = useRefresh(onRefresh);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id_movimiento.toString()}
        renderItem={({ item }) => <MovementListItem movimiento={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
}
