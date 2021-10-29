import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text,View} from "react-native";
import Allmessages from "./allmessages";
import Chat from "./chat";
const Stack = createNativeStackNavigator();
const Message=()=>
{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="allmessages" component={Allmessages}/>
        <Stack.Screen name="chat" component={Chat}/>
      </Stack.Navigator>
    )
}

export default Message;