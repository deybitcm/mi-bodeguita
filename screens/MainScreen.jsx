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
