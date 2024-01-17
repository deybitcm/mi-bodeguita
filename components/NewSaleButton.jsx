import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function NewSaleButton({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="pluscircleo" size={14} color="white" />
        <Text style={styles.textButton}>Nueva venta</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#229954",
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
