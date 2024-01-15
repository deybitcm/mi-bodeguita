import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Bar } from "react-native-progress";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { verifycode } from "../api.js";

export default function LoginAuthScreen({ route, navigation }) {
  const [counter, setCount] = useState(30);
  //const [otp, setOtp] = useState("");
  const userPhoneNumber = route.params?.phoneNumber || "123987654";

  //const [setUser] = useContext(AuthContext);
  const loginUser = async (otp) => {
    // funcion para obtener el hash del usuario
    const response = await verifycode(`+51${userPhoneNumber}`, otp);

    //const user = { userPhoneNumber };
    //await AsyncStorage.setItem("user", JSON.stringify(user));
    //setUser(user);

    return response;
  };

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
        Te lo enviamos a tu whatsapp +51 {userPhoneNumber}
      </Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <OtpInput
          numberOfDigits={6}
          focusColor="#000"
          focusStickBlinkingDuration={500}
          hideStick={false}
          onFilled={(text) => {
            if (loginUser(text)) {
              navigation.navigate("Store");
            } else console.log("bad request");
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
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            alignSelf: "center",
            width: "auto",
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
