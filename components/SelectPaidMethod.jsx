import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const SelectPaidMethod = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState("Efectivo");

  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccionar el método de pago</Text>
      <View style={styles.optionsContainer}>
        <Pressable
          style={[
            styles.option,
            selectedMethod === "Efectivo" && styles.selectedOption,
          ]}
          onPress={() => handleMethodSelection("Efectivo")}
        >
          <Text style={styles.optionText}>Efectivo</Text>
        </Pressable>
        <Pressable
          style={[
            styles.option,
            selectedMethod === "Tarjeta" && styles.selectedOption,
          ]}
          onPress={() => handleMethodSelection("Tarjeta")}
        >
          <Text style={styles.optionText}>Tarjeta</Text>
        </Pressable>
        <Pressable
          style={[
            styles.option,
            selectedMethod === "Transferencia bancaria" &&
              styles.selectedOption,
          ]}
          onPress={() => handleMethodSelection("Transferencia bancaria")}
        >
          <Text style={styles.optionText}>Transferencia bancaria</Text>
        </Pressable>
        <Pressable
          style={[
            styles.option,
            selectedMethod === "yape" && styles.selectedOption,
          ]}
          onPress={() => handleMethodSelection("yape")}
        >
          <Text style={styles.optionText}>yape</Text>
        </Pressable>
        <Pressable
          style={[
            styles.option,
            selectedMethod === "otro" && styles.selectedOption,
          ]}
          onPress={() => handleMethodSelection("otro")}
        >
          <Text style={styles.optionText}>otro</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  option: {
    width: "30%",
    height: 80,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 4,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: "green",
  },
  optionText: {
    fontSize: 16,
  },
});

export default SelectPaidMethod;
