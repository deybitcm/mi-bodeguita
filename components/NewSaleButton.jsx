import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function NewSaleButton() {
  return (
    <Pressable style={styles.button}>
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
    margin: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
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
