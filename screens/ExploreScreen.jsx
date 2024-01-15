import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/empleado.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View>
        <Image
          source={require("../assets/cliente.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View>
        <Image
          source={require("../assets/proveedor.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
