import React from "react";
import { Pressable, Text } from "react-native";

const NewCreditButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "transparent" : "transparent",
          padding: 10,
          borderRadius: 5,
        },
      ]}
      onPress={() => {
        console.log("Agregar un abono");
      }}
    >
      <Text style={{ color: "blue" }}>Agregar un abono</Text>
    </Pressable>
  );
};

export default NewCreditButton;
