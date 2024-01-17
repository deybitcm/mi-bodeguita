import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function CategoryListItem({ category, isPressed, onPress }) {
  return (
    <View style={styles.itemOfList}>
      <Pressable
        onPress={onPress}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          marginHorizontal: 5,
          backgroundColor: isPressed ? "#FFC300" : "#fff",
        }}
      >
        <Text
          style={[
            styles.textStyle,
            { fontWeight: isPressed ? "bold" : "normal" },
          ]}
        >
          {category.nombre}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemOfList: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textStyle: {
    fontSize: 14,
  },
});
