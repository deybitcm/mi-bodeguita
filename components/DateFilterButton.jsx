import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function DateFilterButton() {
  return (
    <Pressable
      style={{
        paddingHorizontal: 15,
        borderLeftColor: "#000",
        borderLeftWidth: 1,
        backgroundColor: "#FFC300",
        paddingVertical: 11,
      }}
    >
      <Ionicons name="calendar-outline" size={24} color="black" />
    </Pressable>
  );
}
