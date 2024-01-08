import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ProductItem({ producto }) {
  const stockphrase =
    producto.stock > 1
      ? `Disponible: ${producto.stock} unidades`
      : producto.stock === 1
      ? `Última unidad`
      : "Agotado";

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.NameText}>{producto.nombre}</Text>
        <Text>{stockphrase}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>Precio unitario: </Text>
          <Text style={styles.PriceText}>S/.{producto.precio}</Text>
        </View>
      </View>
      <View>
        <Text>Imagen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  NameText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  PriceText: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
