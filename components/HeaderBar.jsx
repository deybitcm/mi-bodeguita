import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HeaderBar() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Ionicons name="person-outline" size={20} color="black" />
        </View>
        <Text>Username</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={{ paddingRight: 25 }}>
          <Pressable>
            <Ionicons name="search-outline" size={28} color="black" />
          </Pressable>
        </View>
        <View style={{ paddingRight: 8 }}>
          <Pressable>
            <MaterialCommunityIcons
              name="filter-menu-outline"
              size={28}
              color="black"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: "#FFC300",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageContainer: {
    width: 34,
    height: 34,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 120,
  },
});
