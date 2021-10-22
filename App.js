import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginpage from './tabs/loginpage'
import HomePage from './tabs/homePage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
 <Stack.Navigator>
        <Stack.Screen name="login" component={Loginpage} />
        <Stack.Screen name="home" component={HomePage} />
      </Stack.Navigator>
   </NavigationContainer>
    // <Loginpage/>rr

  );
}


