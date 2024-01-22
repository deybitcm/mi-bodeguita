import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";

const NewSaleProductList = () => {
  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 10,
      stock: 5,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 20,
      stock: 10,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 15,
      stock: 3,
    },
    // Agrega más productos aquí...
  ];

  const renderProductItem = ({ item }) => {
    return (
      <Pressable style={styles.productItem}>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productStock}>Stock: {item.stock}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.newProductButton}>
        <Text style={styles.newProductButtonText}>Nuevo producto</Text>
      </Pressable>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  newProductButton: {
    backgroundColor: "blue",
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "white",
  },
  newProductButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  productItem: {
    flex: 1,
    alignItems: "center",
    margin: 8,
    backgroundColor: "white",
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    marginBottom: 4,
  },
  productStock: {
    fontSize: 12,
  },
});

export default NewSaleProductList;
