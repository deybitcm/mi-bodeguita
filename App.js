import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

import EmployeeFormScreen from './screens/EmployeeFormScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: '#fef04f' },
            headerTitleStyle: { color: '#f30c1e' },
          }}
        />
        <Tabs.Screen name="LoginScreen" component={LoginScreen}
          options={{
            headerStyle: { backgroundColor: '#fef04f' },
            headerTitleStyle: { color: '#f30c1e' },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
