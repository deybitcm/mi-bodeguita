import React from "react";
import { View, Text, TextInput } from "react-native";

const ConceptInput = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "90%",
        backgroundColor: "white",
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
      }}
    >
      <Text>Concepto</Text>
      <TextInput
        placeholder="Ingrese el concepto"
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

export default ConceptInput;
