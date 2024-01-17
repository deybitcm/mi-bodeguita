import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useProducts } from "../Hooks/ProductsCustomHook.js";

// componentes
import InventoryHeader from "../components/InventoryHeader.jsx";
import ProductList from "../components/ProductList.jsx";
import NewProductButton from "../components/BottomButton.jsx";
import InventoryBodyHeader from "../components/InventoryBodyHeader.jsx";

export default function InventoryScreen() {
  const { products, loadList } = useProducts();
  const handlePress = () => {
    console.log("Crear producto");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <InventoryHeader />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyHeaderContainer}>
          <InventoryBodyHeader />
        </View>
        <View style={styles.bodyListContainer}>
          <ProductList items={products} onRefresh={loadList} />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <NewProductButton
          colorButton={"#229954"}
          title={"CREAR PRODUCTO"}
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerContainer: {
    flex: 1.7,
    backgroundColor: "#FFC300",
  },
  bodyContainer: {
    flex: 7,
    marginVertical: 8,
  },
  bodyHeaderContainer: {
    flex: 2,
  },
  bodyListContainer: {
    flex: 6,
  },
  footerContainer: {
    flex: 1,
  },
});
