import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DebtheaderRigthButton() {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.row}>
        <Text style={styles.circularText}>3</Text>
        <Text style={styles.textButton}>Por pagar</Text>
      </View>
      <Text style={styles.textButton}>S/. 0</Text>
      <Text style={styles.textButton}>0 proveedores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "red",
    borderBottomWidth: 8,
    borderRadius: 15,
  },
  textButton: {
    fontSize: 14,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  circularText: {
    textAlign: "center",
    fontSize: 14,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "red", // o cualquier otro color
    color: "#fff", // o cualquier otro color
    marginRight: 5,
    borderWidth: 0,
  },
});
