import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function BottomButton({ colorButton, title, onPress }) {
  return (
    <View style={[styles.buttonContainer, { backgroundColor: colorButton }]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 10,
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
