import { StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthProvider from './components/AuthContext.jsx';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

//Pantallas
import MainScreen from './screens/MainScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import RegisterAuthConfirmScreen from './screens/RegisterAuthConfirmScreen.jsx';
import RegisterStoreScreen from './screens/RegisterStoreScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginAuthScreen from './screens/LoginAuthScreen.jsx';
import LoginPhoneScreen from './screens/LoginPhoneScreen.jsx';
import LoginStoreScreen from './screens/LoginStoreScreen.jsx';

//Explorador
import EmployeeScreen from './screens/EmployeeScreen.jsx';
import ClientScreen from './screens/ClientScreen.jsx';
import SupplierScreen from './screens/SupplierScreen.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const restoreSession = async () => {
      const savedUser = await AsyncStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    };

    restoreSession();
  }, []);

  return (
    <AuthProvider value={{user, setUser}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
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
        <Stack.Group>
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitle: ''}}/>
          <Stack.Screen name="RegisterConfirm" component={RegisterAuthConfirmScreen} options={{headerTitle: ''}}/>
          <Stack.Screen name="RegisterStore" component={RegisterStoreScreen} options={{headerTitle: ''}}/>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle: ''}}/>
          <Stack.Screen name="Phone" component={LoginPhoneScreen} options={{headerTitle: ''}}/>
          <Stack.Screen name="Auth" component={LoginAuthScreen} options={{headerTitle: ''}}/>
          <Stack.Screen name="Store" component={LoginStoreScreen}  
            options={({ navigation}) => ({
              headerTitle: '',
            })}
          />
        </Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Empleados" component={EmployeeScreen}
          options={{
            headerShown: true,
            headerTitle: 'Empleados',
            headerStyle: {
              backgroundColor: '#FFC300',
            },
          }}
        />
        <Stack.Screen name="Clientes" component={ClientScreen}
          options={{
            headerShown: true,
            headerTitle: 'Clientes',
            headerStyle: {
              backgroundColor: '#FFC300',
            },
          }}
        />
        <Stack.Screen name="Proveedores" component={SupplierScreen}
          options={{
            headerShown: true,
            headerTitle: 'Proveedores',
            headerStyle: {
              backgroundColor: '#FFC300',
            },
          }}
        />
      </Stack.Navigator>
      </NavigationContainer>
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </AuthProvider>
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
