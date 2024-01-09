import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { label: "Tienda cedemarc", value: "1" },
  { label: "20 Lucas", value: "2" },
  { label: "30 Lucas", value: "3" },
  { label: "Personal", value: "4" },
  { label: "Mi Bodeguita", value: "5" },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Selecciona una opción"
      searchPlaceholder="Buscar..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <MaterialCommunityIcons
          style={styles.icon}
          color="black"
          name="store"
          size={20}
        />
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginHorizontal: 16,
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: "300",
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  itemTextStyle: {
    fontSize: 14,
  },
});
