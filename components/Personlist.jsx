import { View, Text, FlatList, RefreshControl } from "react-native";
import React from "react";
import PersonListItem from "./PersonListItem.jsx";
import { useRefresh } from "../Hooks/RefreshingCustomHook.js";

const PersonList = ({ items, onRefresh }) => {
  const { refreshing, handleRefresh } = useRefresh(onRefresh);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={items}
        keyExtractor={(item) => item.id_persona.toString()}
        renderItem={({ item }) => <PersonListItem person={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default PersonList;
