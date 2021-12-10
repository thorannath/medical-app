import React, { useEffect, useState }  from "react";
import {Text,View,StyleSheet,SafeAreaView,ImageBackground} from "react-native";
import { Component } from "react";
import axios from "axios";


const Myprofile=({route})=>
{
  const userId=route.params.userName;
  const [name,setname]=useState([]);
  const [profile,setprofile]=useState([]); 
  const [insurance,setins]=useState([]);


  const apiIns=()=>{
    axios.get("https://patient-kiosk.herokuapp.com/intake/"+userId+"/insuranceDetails"
    )
    .then(function (response) {
   
     setins(response.data.patient);
  
    })
    .catch(function (error) {
      alert(error);
    });
  };
  const apiPro=()=>{
    axios.get("https://patient-kiosk.herokuapp.com/intake/"+userId+"/personalDetails"
    )
    .then(function (response) {
   
     setprofile(response.data.patient);
  
    })
    .catch(function (error) {
      alert(error);
    });
  };
  const apiName=()=>{
    axios.get("https://patient-kiosk.herokuapp.com/patientDetails"
    )
    .then(function (response) {
    
    
     for(var a of response.data.patients)
     {
       
       if(a.id==userId)
       {
            setname({
                fname:a.first_name,
                lname:a.last_name,

            })
           
       }
     }
  
    })
    .catch(function (error) {
      alert(error);
    });



  }



   useEffect(()=>{
    
     apiName();
     apiPro();
    apiIns();
     },[]);


    return(
        <SafeAreaView style={styles.container}>
          <ImageBackground  style={{width:"100%",height:"100%"}} source={require('../assets/images/dog.jpg')}>
           <View style={{marginTop:40,padding:30,alignContent:"center"}}>
             <Text style={{color:"#000",fontSize:25,fontWeight:"bold",textAlign:"center"}}>HELLO!  {name.fname}{name.lname}</Text>

               </View>
             

               <View style={{opacity:0.85,height:"50%",marginTop:"90%",backgroundColor:"#000",borderTopRightRadius:100,borderTopLeftRadius:100}}>
               <Text style={{paddingTop:10,color:"#fff",textAlign:"center",fontWeight:'bold',fontSize:18}}>
               HEIGHT:  {profile.height} cm/ft
            </Text>
            <Text style={{color:"#fff",textAlign:"center",fontWeight:'bold',fontSize:18}}>
            WEIGHT:  {profile.weight} lbs/kg
            </Text>
            <Text style={{color:"#fff",textAlign:"center",fontWeight:'bold',fontSize:18}}>
              Marital Status: {profile.marital_status}
            </Text>
            <Text style={{color:"#fff",textAlign:"center",fontWeight:'bold',fontSize:18}}>
              License-NO: {profile.license_no}
            </Text>             
               <Text style={{color:"#fff",textAlign:"center",fontWeight:'bold',fontSize:18}}>
              Insurance NO: {insurance.insurance_no}
            </Text>
            <Text style={{color:"#fff",textAlign:"center",fontWeight:'bold',fontSize:18}}>
              RX Bin:  {insurance.rx_bin}
            </Text>
            <Text style={{color:"#fff",textAlign:"center",fontWeight:'bold',fontSize:18}}>
              RX Group:  {insurance.rx_group}
            </Text>
               </View>

     
    </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:20,
    
    }
}
);

export default Myprofile;