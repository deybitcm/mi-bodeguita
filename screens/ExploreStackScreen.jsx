import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeScreen from "./EmployeeScreen.jsx";
import ClientScreen from "./ClientScreen.jsx";
import SupplierScreen from "./SupplierScreen.jsx";
import ExploreScreen from "./ExploreScreen.jsx";

const Stack = createNativeStackNavigator();

export default function ExploreStackScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Menu"
          component={ExploreScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Empleados" component={EmployeeScreen} />
        <Stack.Screen name="Clientes" component={ClientScreen} />
        <Stack.Screen name="Proveedores" component={SupplierScreen} />
      </Stack.Navigator>
    </View>
  );
}
