import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginpage from './tabs/loginpage'
import HomePage from './tabs/homePage'
import SignUp from './tabs/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>

 <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="login" component={Loginpage} options={{headerTitle:' '}}/>
        <Stack.Screen name="home" component={HomePage}  options={{headerTitle:' '}}/>
        <Stack.Screen name="signup" component={SignUp}  options={{headerTitle:' '}}/>

 
      </Stack.Navigator>
   </NavigationContainer>
    // <Loginpage/>rr

  );
}


