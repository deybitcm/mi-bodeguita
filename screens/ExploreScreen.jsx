import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={{ padding: 10, flex: 1, alignItems: "center" }}>
        <Pressable>
          <Image
            source={require("../assets/empleado.png")}
            style={{ width: 60, height: 60 }}
          />
        </Pressable>
        <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Empleados</Text>
      </View>
      <View style={{ padding: 10, flex: 1, alignItems: "center" }}>
        <Pressable>
          <Image
            source={require("../assets/cliente.png")}
            style={{ width: 60, height: 60 }}
          />
        </Pressable>
        <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Clientes</Text>
      </View>
      <View style={{ padding: 10, flex: 1, alignItems: "center" }}>
        <Pressable>
          <Image
            source={require("../assets/proveedor.png")}
            style={{ width: 60, height: 60 }}
          />
        </Pressable>
        <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Proveedores</Text>
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
});
