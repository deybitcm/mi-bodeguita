import React, { useState } from "react";
import { Pressable, Text } from "react-native";

const SelectDateButton = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePress = () => {
    // Aquí puedes abrir el calendario o realizar cualquier otra acción relacionada con la selección de fecha
    console.log("Fecha seleccionada:", selectedDate);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{
        flex: 1,
        width: "90%",
        backgroundColor: "white",
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
      }}
    >
      <Text>Seleccionar fecha</Text>
    </Pressable>
  );
};

export default SelectDateButton;
