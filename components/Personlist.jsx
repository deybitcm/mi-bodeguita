import { View, Text, FlatList } from "react-native";
import React from "react";

const PersonList = ({ clients }) => {
  return (
    <FlatList
      data={clients}
      keyExtractor={(item) => item.id_persona.toString()}
      renderItem={({ item }) => <Text>{item.nombre}</Text>}
    />
  );
};

export default PersonList;
