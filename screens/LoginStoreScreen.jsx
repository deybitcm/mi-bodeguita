import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function LoginStoreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 15,
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "normal",
          }}
        >
          Paso 3 de 3
        </Text>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 15,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Escoge tu tienda
        </Text>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 13,
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          Selecciona la tienda a la cual acceder
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              paddingStart: 28,
              fontSize: 13,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Tiendas disponibles
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            borderColor: "#000",
            borderWidth: 2,
            marginHorizontal: 25,
            borderRadius: 20,
            paddingVertical: 3,
          }}
        >
          <Text
            style={{
              paddingStart: 14,
              fontSize: 15,
              alignSelf: "center",
              paddingHorizontal: 10,
              borderRightWidth: 1,
              borderRightColor: "#8F8F8F",
            }}
          >
            +51
          </Text>
          <TextInput
            style={{
              fontSize: 15,
              height: 34,
              width: 300,
              borderRadius: 10,
              paddingStart: 10,
              color: "#000",
            }}
            keyboardType="numeric"
            placeholder="Número de celular"
          />
        </View>
      </View>
      <View
        style={{
          alignSelf: "center",
          flex: 1,
          justifyContent: "flex-end",
          width: "90%",
          marginBottom: 20,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#000",
            borderRadius: 15,
            height: 50,
            alignContent: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            handleSubmit();
            if (!isFieldEmpty) navigation.navigate("Home");
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 15,
              marginVertical: 10,
            }}
          >
            Continuar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
