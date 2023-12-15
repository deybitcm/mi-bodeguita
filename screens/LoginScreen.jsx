import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Layout from "../components/Layout.js";

const LoginScreen = () => {
  return (
    <Layout>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          INICIAR SESIÓN
        </Text>
      </TouchableOpacity>
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
