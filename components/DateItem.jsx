import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function DateItem({ item, onPress, isSelected }) {
  const buttonStyle = isSelected ? styles.buttonPressed : styles.button;
  return (
    <Pressable style={buttonStyle} onPress={() => onPress(item)}>
      <View style={{ padding: 10 }}>
        <Text style={isSelected ? styles.textPressed : styles.text}>
          {item}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFC300",
    borderRadius: 8,
    margin: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  buttonPressed: {
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 12,
    color: "#000",
  },
  textPressed: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
});
