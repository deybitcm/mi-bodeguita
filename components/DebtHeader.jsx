import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DebtHeaderLeftButton from "./DebtHeaderLeftButton.jsx";
import DebtHeaderRightButton from "./DebtHeaderRightButton.jsx";

export default function DebtHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <DebtHeaderLeftButton />
      </View>
      <View style={styles.rightContainer}>
        <DebtHeaderRightButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 5,
    marginVertical: 15,
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 10,
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 10,
  },
});
