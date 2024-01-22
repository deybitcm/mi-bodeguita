import React from "react";
import { Pressable, Text } from "react-native";

const BasketButton = ({ totalPrice, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Basket");
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "gray" : "blue",
          padding: 10,
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <Text style={{ color: "white", fontSize: 16 }}>Ir a Canasta</Text>
      <Text style={{ color: "white", fontSize: 16 }}>Total: ${totalPrice}</Text>
    </Pressable>
  );
};

export default BasketButton;
