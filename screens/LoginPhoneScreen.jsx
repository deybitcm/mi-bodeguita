import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function LoginAuthScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    handleSubmit();
  }, [phoneNumber]);

  const handleInputChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = () => {
    if (phoneNumber.trim() === "") {
      setIsFieldEmpty(true);
    } else {
      setIsFieldEmpty(false);
    }
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
          Protege tu cuenta con tu celular
        </Text>
        <Text
          style={{
            paddingStart: 28,
            fontSize: 13,
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          Ingresa de forma segura y fácil utilizando tu teléfono móvil
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
            borderColor: isFieldEmpty ? "#FF0000" : "#000",
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
              color: isFieldEmpty ? "#FF0000" : "#000",
            }}
            keyboardType="numeric"
            placeholder="Número de celular"
            value={phoneNumber}
            onChangeText={handleInputChange}
          />
        </View>
        {isFieldEmpty && (
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
            if (!isFieldEmpty) navigation.navigate("Auth");
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
