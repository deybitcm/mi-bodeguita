import React from "react";
import { Pressable, Text } from "react-native";

const SelectClient = () => {
  return (
    <Pressable
      onPress={() => console.log("Cliente seleccionado")}
      style={{
        flex: 1,
        width: "90%",
        backgroundColor: "white",
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
      }}
    >
      <Text>Cliente</Text>
      <Text>Escoge tu cliente</Text>
    </Pressable>
  );
};

export default SelectClient;
