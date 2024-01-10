import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const MovementsHeader = ({ filter, onTypeChange, navigation, route }) => {
  return (
    <View style={styles.header}>
      <Pressable
        style={filter === "ventas" ? styles.buttonPressed : styles.button}
        onPress={() => {
          onTypeChange("ventas");
          navigation.navigate("Revenues");
        }}
      >
        <Text style={styles.text}>Ingresos</Text>
      </Pressable>

      <Pressable
        style={filter === "compras" ? styles.buttonPressed : styles.button}
        onPress={() => {
          onTypeChange("compras");
          navigation.navigate("Expenses");
        }}
      >
        <Text style={styles.text}>Egresos</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    flexDirection: "row",
    height: 60,
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
    borderBottomWidth: 3,
  },
  text: {
    fontSize: 16,
  },
});

export default MovementsHeader;
