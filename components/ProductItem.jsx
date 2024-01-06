import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ProductItem({ producto }) {
  return (
    <View style={styles.container}>
      <Text>{producto.nombre}</Text>
      <Text>Precio: S/.{producto.precio}</Text>
      <Text>Stock: {producto.stock}</Text>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
});
