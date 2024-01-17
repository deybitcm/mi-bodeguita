import { View, Text, Animated } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons/";

// Pantallas
import BalanceScreen from "./BalanceScreen.jsx";
import DebtScreen from "./DebtScreen.jsx";
import InventoryScreen from "./InventoryScreen.jsx";
import ExploreScreen from "./ExploreScreen.jsx";
import ExploreStackScreen from "./ExploreStackScreen.jsx";

// Header
import HeaderBar from "../components/HeaderBar.jsx";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Balance"
      screenOptions={{
        header: () => <HeaderBar />,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold",
          marginTop: 2,
        },
        tabBarActiveTintColor: "#FFC300",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#373C64",
          borderTopWidth: 0,
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          paddingBottom: 5,
          paddingTop: 2,
          height: 55,
        },
      }}
    >
      <Tab.Screen
        name="Balance"
        component={BalanceScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: focused ? -10 : 0,
                  },
                ],
              }}
            >
              <View
                style={{
                  borderRadius: size,
                  borderColor: focused ? "#fff" : "#373C64",
                  borderWidth: 2,
                  backgroundColor: focused ? "#FFC300" : "transparent",
                  margin: focused ? -10 : 0,
                  padding: focused ? 4 : 0,
                }}
              >
                <MaterialCommunityIcons
                  name="scale-unbalanced"
                  color={focused ? "#373C64" : color}
                  size={focused ? size + 6 : size}
                />
              </View>
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="Deudas"
        component={DebtScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: focused ? -10 : 0,
                  },
                ],
              }}
            >
              <View
                style={{
                  borderRadius: size,
                  borderColor: focused ? "#fff" : "#373C64",
                  borderWidth: 2,
                  backgroundColor: focused ? "#FFC300" : "transparent",
                  margin: focused ? -5 : 0,
                  padding: focused ? 4 : 0,
                }}
              >
                <Ionicons
                  name="cash-outline"
                  color={focused ? "#373C64" : color}
                  size={focused ? size + 6 : size}
                />
              </View>
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="Inventario"
        component={InventoryScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: focused ? -10 : 0,
                  },
                ],
              }}
            >
              <View
                style={{
                  borderRadius: size,
                  borderColor: focused ? "#fff" : "#373C64",
                  borderWidth: 2,
                  backgroundColor: focused ? "#FFC300" : "transparent",
                  margin: focused ? -5 : 0,
                  padding: focused ? 5 : 0,
                }}
              >
                <Ionicons
                  name="book-outline"
                  color={focused ? "#373C64" : color}
                  size={focused ? size + 4 : size}
                />
              </View>
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={ExploreStackScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: focused ? -10 : 0,
                  },
                ],
              }}
            >
              <View
                style={{
                  borderRadius: size,
                  borderColor: focused ? "#fff" : "#373C64",
                  borderWidth: 2,
                  backgroundColor: focused ? "#FFC300" : "transparent",
                  margin: focused ? -5.5 : 0,
                  padding: focused ? 2 : 0,
                }}
              >
                <Ionicons
                  name="compass-outline"
                  color={focused ? "#373C64" : color}
                  size={focused ? size + 6 : size}
                />
              </View>
            </Animated.View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
