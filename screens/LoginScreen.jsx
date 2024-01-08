import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import Layout from "../components/Layout.jsx";

const LoginScreen = ({ navigation }) => {
  return (
    <Layout>
      <Image
        source={require("../assets/logo-sin-fondo.png")}
        style={{
          width: "70%",
          height: 200,
          alignSelf: "center",
        }}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico o celular"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.button}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          INICIAR SESIÓN
        </Text>
      </Pressable>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: "#f30c1e",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#fe1b08",
    borderRadius: 10,
    padding: 10,
  },
});

export default LoginScreen;
