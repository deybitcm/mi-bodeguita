import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Pantallas
import MainScreen from './screens/MainScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginAuthScreen from './screens/LoginAuthScreen.jsx';
import LoginPhoneScreen from './screens/LoginPhoneScreen.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShown: true,
          headerTintColor: '#000',
        }
      }>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="Auth" component={LoginAuthScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="Phone" component={LoginPhoneScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
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
