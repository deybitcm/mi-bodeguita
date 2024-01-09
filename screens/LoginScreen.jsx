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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  return (
    <Layout>
      <Text style={styles.title}>¡Hola de nuevo!</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Phone");
        }}
        style={styles.button}
      >
        <MaterialCommunityIcons name="phone" size={24} color="black" />
        <Text
          style={{
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 17,
            backgroundColor: "#FFC300",
            padding: 10,
          }}
        >
          Ingresar con número de celular
        </Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          marginTop: 80,
        }}
      >
        <Text>¿No tienes una cuenta creada?</Text>
        <Pressable
          style={{
            marginLeft: 5,
          }}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 13,
              borderBottomWidth: 1,
            }}
          >
            Regístrate
          </Text>
        </Pressable>
      </View>
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
    fontSize: 26,
    textAlign: "center",
    marginBottom: 16,
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC300",
    borderRadius: 10,
    padding: 10,
  },
});

export default LoginScreen;
