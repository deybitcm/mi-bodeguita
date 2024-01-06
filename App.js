import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React from 'react';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Pantallas
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import PersonListScreen from './screens/PersonListScreen.jsx';

const Tabs = createBottomTabNavigator();

const BalanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Balance Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
      <View>
        <Text>INICIO</Text>
      </View>
      <TouchableOpacity 
      style={{
        backgroundColor: '#CBB4B1',
        padding: 20, width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Text>Empezar</Text>
        
      </TouchableOpacity>
    </SafeAreaView>
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
