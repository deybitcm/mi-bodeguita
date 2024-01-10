import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function NewPurchaseButton() {
  return (
    <Pressable style={styles.button}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="minuscircleo" size={22} color="white" />
        <Text style={styles.textButton}>Nuevo gasto</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E74C3C",
    borderRadius: 8,
    margin: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    width: "80%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    paddingLeft: 5,
    fontSize: 17,
    color: "#fff",
  },
});
