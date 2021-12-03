import React from "react";
import {Text,View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FindDoc from "./finddoctor";
import Message from "./message";
import Myprofile from "./myprofile";
import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from "expo-linear-gradient";
const tab = createBottomTabNavigator();
const HomePage=({route})=>{
  // console.log(route.params.userName);
  const user=route.params.userName;
    return(

        <tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown:false,
            tabBarStyle:[
            {  backgroundColor: '#000',
              }
        ]
          }}
          >
            <tab.Screen name='myprofile' component={Myprofile} 
            options={{ tabBarIcon: ({ focused }) => (
                <View style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 15
                }}>
                  <FontAwesome5
                    name="user"
                    size={25}
                    color={focused ? '#99f2c8' : '#1f4037'}
                  ></FontAwesome5>
                </View>
              )
            }}
            />
            <tab.Screen name='finddoc' component={FindDoc}
              options={{ tabBarIcon: ({ focused }) => (
                <View style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 15
                }}>
                  <FontAwesome5
                    name="calendar"
                    size={25}
                    color={focused ? '#99f2c8' : '#1f4037'}
                  ></FontAwesome5>
                </View>
              )
            }}/>
            <tab.Screen name='message' component={Message}
            initialParams={{userName: user}}
              options={{ tabBarIcon: ({ focused }) => (
                <View style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 15
                
                }}>
                  {/* <Image source={require('../assets/images/notification.png')}/> */}
                  <FontAwesome5
                    name="comment-medical"
                    size={25}
                    color={focused ? '#99f2c8' : '#1f4037'}
                  ></FontAwesome5>
                </View>
              )
            }}/>
            </tab.Navigator>
          
        // <View>
        //     <Text>HELLO</Text>
        // </View>
    )
}
export default HomePage;