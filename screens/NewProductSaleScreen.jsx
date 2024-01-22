import { View, Text, StyleSheet } from "react-native";
import React from "react";

import ProductInputField from "../components/ProductInputField.jsx";
import ProductCategoriesFilter from "../components/ProductCategoriesFilter.jsx";
import NewSaleProductList from "../components/NewSaleProductList.jsx";
import BasketButton from "../components/BasketButton.jsx";

export default function NewProductSaleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyHeaderContainer}>
          <View style={styles.bodyHeaderProductFilterContainer}>
            <ProductInputField />
          </View>
          <View style={styles.bodyHeaderCategoryFilterContainer}>
            <ProductCategoriesFilter />
          </View>
        </View>
        <View style={styles.bodyProductListContainer}>
          <NewSaleProductList />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <BasketButton totalPrice={45} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 8,
    backgroundColor: "red",
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  bodyHeaderContainer: {
    flex: 1,
  },
  bodyHeaderProductFilterContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "pink",
    alignItems: "center",
    marginHorizontal: 20,
  },
  bodyHeaderCategoryFilterContainer: {
    flex: 1,
    backgroundColor: "green",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  bodyProductListContainer: {
    flex: 3.5,
    backgroundColor: "blue",
  },
});
