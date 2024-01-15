import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState, useRef, useContext } from "react";

import AuthContext from "../components/AuthContext.jsx";

export default function RegisterScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [trigger, setTrigger] = useState(false);
  const isFieldEmpty = useRef(false);
  const isFieldFull = useRef(false);
  const [showText, setShowText] = useState(false);

  const handleInputChange = (value) => {
    setPhoneNumber(value);

    value.trim().length === 9
      ? (isFieldFull.current = true)
      : (isFieldFull.current = false);
    value.trim() === ""
      ? (isFieldEmpty.current = true)
      : (isFieldEmpty.current = false);

    setShowText(false);
  };

  const handleSubmit = () => {
    phoneNumber.trim().length === 9
      ? (isFieldFull.current = true)
      : (isFieldFull.current = false);
    phoneNumber.trim() === ""
      ? (isFieldEmpty.current = true)
      : (isFieldEmpty.current = false);
    setTrigger(!trigger);

    !isFieldFull.current && !isFieldEmpty.current
      ? setShowText(true)
      : setShowText(false);
  };

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
          Paso 1 de 3
        </Text>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 15,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Ingresa tu número de teléfono
        </Text>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 13,
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          Te enviaremos un código de verificación por mensaje de WhatsApp
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
            Ingresa tu celular
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingStart: 5,
              fontSize: 13,
              color: "red",
            }}
          >
            *
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            borderColor: isFieldEmpty.current ? "#FF0000" : "#000",
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
              color: isFieldEmpty.current ? "#FF0000" : "#000",
            }}
            keyboardType="numeric"
            placeholder="Número de celular"
            value={phoneNumber}
            onChangeText={handleInputChange}
          />
        </View>
        {isFieldEmpty.current && (
          <Text
            style={{
              color: "red",
              fontSize: 13,
              paddingStart: 28,
              paddingTop: 10,
            }}
          >
            Este campo es obligatorio
          </Text>
        )}
        {showText && (
          <Text
            style={{
              color: "#DEA201",
              fontSize: 13,
              paddingStart: 28,
              paddingTop: 10,
            }}
          >
            El número de celular no es válido. Verificar la información
          </Text>
        )}
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
            if (!isFieldEmpty.current && isFieldFull.current)
              navigation.navigate("RegisterConfirm");
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
