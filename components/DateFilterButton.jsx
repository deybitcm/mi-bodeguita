import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function DateFilterButton() {
  return (
    <View
      style={{
        backgroundColor: "#FFC300",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Pressable
        style={{
          paddingHorizontal: 15,
          borderLeftColor: "#000",
          borderLeftWidth: 1,
        }}
      >
        <Ionicons name="calendar-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
}
