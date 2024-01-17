import { View, Text } from "react-native";
import React from "react";
import PersonList from "../components/PersonList.jsx";
import { usePersons } from "../Hooks/PersonsCustomHook.js";

export default function EmployeeScreen() {
  const { persons, loadList } = usePersons({ option: 1 });

  return (
    <View>
      <PersonList items={persons} onRefresh={loadList} />
    </View>
  );
}
