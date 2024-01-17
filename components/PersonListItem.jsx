import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PersonListItem({ person }) {
  return (
    <View
      style={{
        ...styles.itemOfList,
      }}
    >
      <View>
        <Text>{person.nombre}</Text>
      </View>
      <View>
        <Text>{`+51 ${person.celular}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemOfList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
