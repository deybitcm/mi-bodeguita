import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Layout from "../components/Layout.js";

const HomeScreen = () => {
  return (
    <Layout>
      <View style={styles.centerContent}>
        <Image
          source={require("../assets/logo_entero.jpeg")}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default HomeScreen;
