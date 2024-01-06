import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={require("../assets/logo-sin-fondo.png")}
          style={{
            height: 200,
            maxWidth: "130%",
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={{
          backgroundColor: "#000",
          padding: 15,
          width: "90%",
          borderRadius: 15,
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          Registrarse
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          backgroundColor: "#fff",
          padding: 15,
          width: "90%",
          borderRadius: 15,
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#000",
        }}
      >
        <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
