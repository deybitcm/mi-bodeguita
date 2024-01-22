import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const TotalValueInput = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (text) => {
    setValue(text);
  };

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
      <Text style={{ color: "red" }}>Valor *</Text>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={handleInputChange}
        style={{ textAlign: "right" }}
      />
      <Text>Valor Total: {value}</Text>
    </View>
  );
};

export default TotalValueInput;
