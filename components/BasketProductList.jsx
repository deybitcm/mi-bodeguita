import React, { useState } from "react";
import { View, Text, Pressable, TextInput, FlatList } from "react-native";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Producto 1", quantity: 1, price: 0 },
    { id: 2, name: "Producto 2", quantity: 1, price: 0 },
    { id: 3, name: "Producto 3", quantity: 1, price: 0 },
  ]);

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleIncreaseQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handlePriceChange = (productId, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, price: value } : product
      )
    );
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        marginVertical: 5,
        borderBottomColor: "black",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => handleDeleteProduct(item.id)}
          style={{
            borderWidth: 1,
            paddingHorizontal: 5,
            borderRadius: 5,
            marginHorizontal: 10,
            backgroundColor: "red",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Borrar
          </Text>
        </Pressable>
        <Text>{item.name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Pressable
          onPress={() => handleDecreaseQuantity(item.id)}
          style={{
            borderWidth: 1,
            borderColor: "black",
            paddingHorizontal: 5,
            borderRadius: 5,
            marginHorizontal: 10,
          }}
        >
          <Text>-</Text>
        </Pressable>
        <Text>{item.quantity}</Text>
        <Pressable
          onPress={() => handleIncreaseQuantity(item.id)}
          style={{
            borderWidth: 1,
            borderColor: "black",
            paddingHorizontal: 5,
            borderRadius: 5,
            marginHorizontal: 10,
          }}
        >
          <Text>+</Text>
        </Pressable>
        <TextInput
          value={item.price.toString()}
          onChangeText={(value) => handlePriceChange(item.id, value)}
          keyboardType="numeric"
          textAlign="right"
          style={{
            borderWidth: 1,
            borderColor: "black",
            paddingHorizontal: 5,
            borderRadius: 5,
            marginHorizontal: 10,
            width: 100,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginVertical: 5,
        }}
      >
        <Text>= S/. {item.price * item.quantity}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default ProductList;
