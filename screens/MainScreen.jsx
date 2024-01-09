import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#8C8C8C" />
      <View style={styles.image}>
        <Image
          source={require("../assets/logo-sin-fondo.png")}
          style={{
            height: 200,
            maxWidth: "130%",
          }}
        />
      </View>
      <View // Botones de prueba para navegar entre pantallas
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
          flexGrow: 2,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#fff",
            padding: 5,
            width: "80%",
            borderRadius: 15,
            borderColor: "#000",
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "500" }}>
            ir a la tienda
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#fff",
            padding: 5,
            width: "80%",
            borderRadius: 15,
            borderColor: "#000",
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("Phone");
          }}
        >
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "500" }}>
            ir a Login 1er paso
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#fff",
            padding: 5,
            width: "80%",
            borderRadius: 15,
            borderColor: "#000",
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("Auth");
          }}
        >
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "500" }}>
            ir a Login 2do paso
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#fff",
            padding: 5,
            width: "80%",
            borderRadius: 15,
            borderColor: "#000",
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("Store");
          }}
        >
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "500" }}>
            ir a Login 3er paso
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#fff",
            padding: 5,
            width: "80%",
            borderRadius: 15,
            borderColor: "#000",
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("RegisterConfirm");
          }}
        >
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "500" }}>
            ir a Confirmar 2do paso
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#fff",
            padding: 5,
            width: "80%",
            borderRadius: 15,
            borderColor: "#000",
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("RegisterStore");
          }}
        >
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "500" }}>
            ir a Confirmar 3er paso
          </Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={styles.botonRegistro}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          Registrarse
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={styles.botonLogin}
      >
        <Text style={{ fontSize: 18, color: "#000", fontWeight: "500" }}>
          Ya tengo una cuenta
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botonRegistro: {
    backgroundColor: "#000",
    padding: 15,
    width: "90%",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  botonLogin: {
    backgroundColor: "#fff",
    padding: 15,
    width: "90%",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
  },
});
