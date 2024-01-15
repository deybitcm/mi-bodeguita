import React, { useState, useRef, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Bar } from "react-native-progress";

export default function RegisterAuthConfirmScreen({ navigation }) {
  const [counter, setCount] = useState(30);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCount(counter - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <>
      <Text
        style={{
          paddingStart: 28,
          fontSize: 13,
          marginTop: 20,
          marginBottom: 3,
          fontWeight: "normal",
        }}
      >
        Paso 2 de 3
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 28,
          marginBottom: 20,
        }}
      >
        <Bar progress={0.66} width={330} color="green" />
      </View>
      <Text
        style={{
          paddingStart: 28,
          fontSize: 16,
          marginTop: 20,
          fontWeight: "bold",
        }}
      >
        Ingresa tu código de seguridad
      </Text>
      <Text
        style={{
          paddingStart: 28,
          fontSize: 14,
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
            navigation.navigate("RegisterStore");
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
            alignSelf: "center",
            width: "auto",
            textDecorationLine: "underline",
          }}
        >
          {counter > 0
            ? `Reenviar código en ${counter} segundos`
            : `Reenviar código`}
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
