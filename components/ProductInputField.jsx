import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function InputField() {
  const [product, setProduct] = useState("");
  const handleInputChange = (text) => {
    setProduct(text);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.imageContainer}>
        <MaterialIcons name="search" size={20} color="black" />
      </View>
      <TextInput
        style={styles.inputStyle}
        value={product}
        onChangeText={handleInputChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#fff",
    height: 40,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  inputStyle: {
    flex: 5,
    fontSize: 15,
    color: "#000",
    alignSelf: "center",
  },
});
