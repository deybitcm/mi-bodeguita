import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PaidUnpaidButton = ({ onPaidPress, onUnpaidPress }) => {
  const [isPaid, setIsPaid] = useState(true);

  const handlePaidPress = () => {
    setIsPaid(true);
    onPaidPress();
  };

  const handleCreditPress = () => {
    setIsPaid(false);
    onUnpaidPress();
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: isPaid ? "green" : "white" }]}
        onPress={handlePaidPress}
      >
        <Text style={styles.buttonText}>Pagado</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: !isPaid ? "red" : "white" }]}
        onPress={handleCreditPress}
      >
        <Text style={styles.buttonText}>a Crédito</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default PaidUnpaidButton;
