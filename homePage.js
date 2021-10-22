import React from "react";
import {Text,View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FindDoc from "./finddoctor";
import Medicine from "./medicine";
import Myprofile from "./myprofile";

const tab = createBottomTabNavigator();
const HomePage=()=>{
    return(

        <tab.Navigator>
            <tab.Screen name='myprofile' component={Myprofile}/>
            <tab.Screen name='finddoc' component={FindDoc}/>
            <tab.Screen name='medicine' component={Medicine}/>
            </tab.Navigator>
        // <View>
        //     <Text>HELLO</Text>
        // </View>
    )
}
export default HomePage;