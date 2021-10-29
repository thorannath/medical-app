import React  from "react";
import {Text,View,StyleSheet,SafeAreaView,Image} from "react-native";
import { Component } from "react";


const Myprofile=()=>
{
const pro='hello'
 const profile=
     {
         name:"Stewe",
         age:"30",
         height:"170 cm",
         weight:"275 lbs",
         profimage:require('../assets/images/nurse.png')
     }
 




    return(
        <SafeAreaView style={styles.container}>
        <View style={{marginTop:40,alignContent:'center',backgroundColor:'#D08AF5',paddingTop:5,paddingBottom:5,borderRadius:90}}>
            <Image style={{height:150,width:100,alignSelf:'center'}} source={profile.profimage}/>
            </View>
           <View style={{marginTop:40}}>
                <Text style={{textAlign:"center",fontWeight:'bold',fontSize:20}}>
              NAME: {profile.name}
            </Text>
            <Text style={{textAlign:"center",fontWeight:'bold',fontSize:15}}>
              AGE:     {profile.age}
            </Text>
            <Text style={{textAlign:"center",fontWeight:'bold',fontSize:15}}>
              HEIGHT:  {profile.height}
            </Text>
            <Text style={{textAlign:"center",fontWeight:'bold',fontSize:15}}>
              WEIGHT:  {profile.weight}
            </Text>
        </View>
     <View style={{marginTop:40,borderColor:'black',borderWidth:5,margin:10,padding:10}}>
         <Text style={{textAlign:"center",fontSize:15,fontWeight:'bold',paddingTop:5}}>HighBloodPressure: ---- </Text>
         <Text style={{textAlign:"center",fontSize:15,fontWeight:'bold',paddingTop:5}}>Heart ECG: ---- </Text>
         <Text style={{textAlign:"center",fontSize:15,fontWeight:'bold',paddingTop:5}}>Echocardiogram : ---- </Text>
         <Text style={{textAlign:"center",fontSize:15,fontWeight:'bold',paddingTop:5}}>HDL/LDL: ---- </Text>
     </View>
     
    
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    }
}
);

export default Myprofile;