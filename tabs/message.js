import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text,View} from "react-native";
import Allmessages from "./allmessages";
import Chat from "./chat";
const Stack = createNativeStackNavigator();
const Message=({route})=>
{
  const user=route.params.userName
    return(
        <Stack.Navigator >
        <Stack.Screen name="allmessages" component={Allmessages}
        options={{title:""}}
        initialParams={{userName: user}}/>
        <Stack.Screen name="chat" component={Chat}
          options={({route}) => ({
            title: route.params.sendtoName,
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    )
}

export default Message;