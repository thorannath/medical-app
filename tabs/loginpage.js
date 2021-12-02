import React ,{useState}from "react";

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text,View,StyleSheet, TouchableOpacity,SafeAreaView,ImageBackground} from "react-native";
import axios from 'axios';
import { TextInput } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';


// const Dologin=()=>
// {
//   // const [username, setUserName] = useState();
//   // const [password, setPassword] = useState();
// const req={
//   "email": username,
//   "password": password
// }
//   axios.post("https://reqres.in/api/login",req)
//   .then(
// res=>{
// this.navigation.navigate('home');
// },
// err=>{
//   alert('assam');
// }
// )

// // }


const Loginpage=({navigation})=>
{
  
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userID="aaaa";
  const Dologin=()=>
  {
    navigation.navigate('home',{userName:userID});
    // axios.post("https://reqres.in/api/login", {
    //   "email": username,
    //   "password": password
    // })
    // .then(function (response) {
    //   // console.warn('issue1');
    //   navigation.navigate('home')
    // })
    // .catch(function (error) {
    //   // console.warn('issue2');
    //   alert('wrong credentials');
    // });
   
  
   }
 
    return(    
    <View style={styles.container}>
        <SafeAreaView>
            
   <View style={{height:"70%",marginTop:"25%",padding:10,textAlign:'centre',alignContent:'center'}}>
   <Text style={styles.title}>PATIENT PORTAL</Text>
   <TextInput 
   style={styles.textinput}
   placeholder='Enter  username'
   placeholderTextColor='#333'
  //  onChange={e => setUserName(e.target.value)}
onChangeText={(username)=> setUserName(username)}
   />
   <TextInput 
   style={styles.textinput}
   placeholder='Enter  password'
   placeholderTextColor='#333'
  //  secureTextEntry={true}
  //  onChange={e =>setPassword(e.target.value)}
   onChangeText={(password)=>setPassword(password)}
   />
   
   
<View style={{alignSelf:'center' }}>   
    <TouchableOpacity 
    onPress={Dologin} 
    // onPress={() => navigation.navigate('home')}
    style={{width:200,marginTop:35,backgroundColor:'#D0D5D3',outline:'none',borderRadius:30,borderWidth:1,alignContent:'center'}}>
    <Text style={{fontSize:15,fontWeight:"bold",padding:10,textAlign:'center'}}>LOG IN</Text>
    
    </TouchableOpacity>
    
    </View>
    <ImageBackground  style={{marginTop:30,width:180,height:180,alignSelf:"center"}} source={require('../assets/images/hearticon.png')}/>
    </View>
    </SafeAreaView>
    <Animatable.View 
        animation="fadeInUpBig"    
    style={{height:"30%",backgroundColor:'#D08AF5',width:'100%',borderTopLeftRadius:30,borderTopRightRadius:30,alignContent:'center',textAlign:'center'}}>
        <Text style={{paddingTop:10,fontSize:30,fontWeight:"bold",textAlign:'center'}}>
            Welcome!
        </Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('signup')}}
        style={{width:200,marginTop:30,backgroundColor:'#D0D5D3',outline:'none',borderRadius:30,borderWidth:1,alignContent:'center',marginLeft:'24%'}}>
    <Text style={{fontSize:15,fontWeight:"bold",padding:10,textAlign:'center'}}>SIGN UP</Text>
    </TouchableOpacity>
        </Animatable.View>
 
  </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize:40,
        fontWeight:"bold",
  

    },
    textinput:
    {
      backgroundColor:'#D0D5D3',
      paddingHorizontal:10,
      marginTop:15,
      height:40
    }
  });
export default Loginpage;