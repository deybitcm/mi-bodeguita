
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import React from "react";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.elementContainer}>
        <Pressable>
          <Image
            source={require("../assets/empleado.png")}
            style={styles.imageContainer}
          />
        </Pressable>
        <Text style={styles.text}>Empleados</Text>
      </View>
      <View style={styles.elementContainer}>
        <Pressable>
          <Image
            source={require("../assets/cliente.png")}
            style={styles.imageContainer}
          />
        </Pressable>
        <Text style={styles.text}>Clientes</Text>
      </View>
      <View style={styles.elementContainer}>
        <Pressable>
          <Image
            source={require("../assets/proveedor.png")}
            style={styles.imageContainer}
          />
        </Pressable>
        <Text style={styles.text}>Proveedores</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
  },
  elementContainer: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
  },
  text: {
    paddingTop: 10,
    fontWeight: "bold",

  },
});
