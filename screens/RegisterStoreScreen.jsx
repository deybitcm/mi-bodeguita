import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, Pressable, BackHandler } from "react-native";
import DropdownComponent from "../components/DropdownStore";
import Checkbox from "expo-checkbox";
import { Bar } from "react-native-progress";

export default function RegisterStoreScreen({ navigation }) {
  const [checked, setChecked] = useState(false);
  BackHandler.addEventListener("hardwareBackPress", () => {
    return true;
  });

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 13,
            marginTop: 20,
            marginBottom: 3,
            fontWeight: "normal",
          }}
        >
          Paso 3 de 3
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 28,
            marginBottom: 20,
          }}
        >
          <Bar progress={1} width={330} color="green" />
        </View>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 16,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Cuéntanos sobre ti y tu negocio
        </Text>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 14,
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          Vamos a personalizar tu experiencia con esta información
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              paddingStart: 28,
              fontSize: 14,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Tu nombre
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingStart: 5,
              fontSize: 14,
              color: "red",
            }}
          >
            *
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <DropdownComponent />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              paddingStart: 28,
              fontSize: 14,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Nombre de tu negocio
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingStart: 5,
              fontSize: 14,
              color: "red",
            }}
          >
            *
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <DropdownComponent />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              paddingStart: 28,
              fontSize: 14,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Tipo de negocio
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingStart: 5,
              fontSize: 14,
              color: "red",
            }}
          >
            *
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <DropdownComponent />
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
            navigation.navigate("Home");
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
