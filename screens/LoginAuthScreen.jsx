import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function LoginAuthScreen({ navigation }) {
  return (
    <>
      <Text
        style={{
          paddingStart: 28,
          fontSize: 15,
          marginTop: 20,
          marginBottom: 20,
          fontWeight: "normal",
        }}
      >
        Paso 2 de 3
      </Text>
      <Text
        style={{
          paddingStart: 28,
          fontSize: 15,
          marginTop: 20,
          fontWeight: "bold",
        }}
      >
        Ingresa tu código de seguridad
      </Text>
      <Text
        style={{
          paddingStart: 28,
          fontSize: 13,
          marginTop: 10,
          marginBottom: 15,
        }}
      >
        Te lo enviamos a tu whatsapp +51987654321
      </Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <OtpInput
          numberOfDigits={6}
          focusColor="#000"
          focusStickBlinkingDuration={500}
          hideStick={false}
          onFilled={(text) => {
            navigation.navigate("Store");
          }}
          theme={{
            inputsContainerStyle: {
              marginHorizontal: 25,
              marginTop: 40,
            },
            pinCodeContainerStyle: {
              borderColor: "#8F8F8F",
              borderWidth: 1,
              borderRadius: 10,
            },
          }}
        />
      </View>
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          marginTop: 80,
        }}
      >
        <Text
          style={{
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Reenviar código
        </Text>
        <Text
          style={{
            marginTop: 5,
            color: "#000",
            textAlign: "center",
            fontSize: 11,
          }}
        >
          Tienes hasta 5 intentos
        </Text>
      </View>
    </>
  );
}
