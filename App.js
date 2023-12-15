import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

import EmployeeFormScreen from './screens/EmployeeFormScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={({navigation}) => ({
            headerStyle: { backgroundColor: '#fef04f' },
            headerTitleStyle: { color: '#f30c1e' },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
              >
                <Text style={{color: 'red', marginRight: 10}}>Login</Text>
              </TouchableOpacity>
            ),
          })} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} 
          options={{
            headerStyle: { backgroundColor: '#fef04f' },
            headerTitleStyle: { color: '#f30c1e' },
          }}
        />
        <Stack.Screen name="EmployeeFormScreen" component={EmployeeFormScreen} />
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
