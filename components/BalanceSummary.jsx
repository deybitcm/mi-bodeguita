import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function BalanceSummary() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Balance</Text>
        <Text style={{ color: "green", fontWeight: "bold" }}>S/. 20</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyLeftItem}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Ionicons name="trending-up" size={14} color="green" />
            <Text style={{ fontWeight: "300", fontSize: 14, marginStart: 5 }}>
              Ingresos
            </Text>
          </View>
          <Text style={{ fontWeight: "bold" }}>S/. 105</Text>
        </View>
        <View style={styles.bodyRigthItem}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Ionicons name="trending-down" size={14} color="red" />
            <Text style={{ fontWeight: "300", fontSize: 14, marginStart: 5 }}>
              Egresos
            </Text>
          </View>
          <Text style={{ fontWeight: "bold" }}>-S/. 85</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
          Descargar Reportes
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#0180DE",
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Ver Balance
          </Text>
          <AntDesign name="right" size={14} color="#0180DE" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
  },
  header: {
    flex: 1.3,
    flexDirection: "row",
    height: 50,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    flex: 1.3,
    flexDirection: "row",
    height: 50,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyLeftItem: {
    flex: 1,
    justifyContent: "space-evenly",
    borderColor: "#ccc",
    borderRigtWidth: 1,
    height: "80%",
    paddingLeft: 10,
  },
  bodyRigthItem: {
    flex: 1,
    justifyContent: "space-evenly",
    borderColor: "#ccc",
    borderLeftWidth: 1,
    height: "80%",
    paddingLeft: 20,
  },
});
