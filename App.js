import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
      <Tabs.Navigator screenOptions={
        {
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#D3BDBA',
            borderTopWidth: 0,
            height: 50,
            paddingVertical: 10,
          },
        }
      }>
        <Tabs.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/home_active.png')}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Tabs.Screen 
          name="LoginScreen" 
          component={LoginScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/user-interface.png')}
                style={{ width: 20, height: 20 }}
              />
            ),
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
