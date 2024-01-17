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
        <AntDesign name="minuscircleo" size={14} color="white" />
        <Text style={styles.textButton}>Nuevo gasto</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E74C3C",
    borderRadius: 15,
    width: "90%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    paddingLeft: 10,
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
  },
});
