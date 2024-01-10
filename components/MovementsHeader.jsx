import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const MovementsHeader = ({ filter, onTypeChange }) => {
  return (
    <View style={styles.header}>
      <View style={filter === "ventas" ? styles.buttonPressed : styles.button}>
        <Pressable
          style={styles.pressZone}
          onPress={() => onTypeChange("ventas")}
        >
          <Text style={styles.text}>Ventas</Text>
        </Pressable>
      </View>
      <View style={filter === "compras" ? styles.buttonPressed : styles.button}>
        <Pressable
          style={styles.pressZone}
          onPress={() => onTypeChange("compras")}
        >
          <Text style={styles.text}>Gastos</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
  },
  pressZone: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    borderBottomWidth: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 16,
  },
});

export default MovementsHeader;
