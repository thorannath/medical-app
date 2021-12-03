import React ,{useState}from "react";
import { useIsFocused } from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";
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
  const isFocused = useIsFocused()
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userID="bbbb";
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
      <ImageBackground  style={{width:"100%",height:"100%"}} source={require('../assets/images/stethoscope.jpg')}>
        <SafeAreaView>         
   <View style={{height:"70%",marginTop:"25%",padding:10,textAlign:'centre',alignContent:'center'}}>
   
      {isFocused && 
     <Animatable.Text 
animation="fadeIn"   
   style={styles.title}>PATIENT PORTAL</Animatable.Text>}
   
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
    style={{width:200,marginTop:25,outline:'none',backgroundColor:'#000',borderRadius:30,borderWidth:1,alignContent:'center'}}>
    <Text style={{color:"#fff",fontSize:15,fontWeight:"bold",padding:10,textAlign:'center'}}>LOG IN</Text>
    
    </TouchableOpacity>
    
    </View>
   
    </View>
    </SafeAreaView>

    <LinearGradient colors={['#1f4037','#99f2c8']}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 1 }}
    style={{height:"30%",width:'100%',borderTopLeftRadius:100,borderTopRightRadius:0,alignContent:'center',textAlign:'center'}}>
    {isFocused && <Animatable.View 
        animation="fadeInUpBig">
        <Text style={{paddingTop:10,fontSize:30,fontWeight:"bold",textAlign:'center'}}>
            Welcome!
        </Text>
        
        <LinearGradient colors={['#C9D6FF','#E2E2E2']} 
           start={{ x: 0, y: 1 }}
           end={{ x: 1, y: 1 }}
        style={{width:200,marginTop:30,outline:'none',borderRadius:30,borderWidth:1,alignContent:'center',marginLeft:'24%'}}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('signup')}}
        >
    <Text style={{fontSize:15,fontWeight:"bold",padding:10,textAlign:'center'}}>SIGN UP</Text>
    </TouchableOpacity>
    </LinearGradient>
        </Animatable.View>}
       </LinearGradient>
 </ImageBackground>
  </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize:40,
        fontWeight:"bold",
        color:"#000",
        textAlign:"center"
  

    },
    textinput:
    {
      backgroundColor:'#FFF',
      paddingHorizontal:10,
      marginTop:35,
      borderRadius:20,
      height:40
    }
  });
export default Loginpage;