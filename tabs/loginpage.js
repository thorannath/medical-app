import React ,{useState,useEffect,useRef}from "react";
import { useIsFocused } from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text,View,StyleSheet, TouchableOpacity,SafeAreaView,ImageBackground} from "react-native";
import axios from 'axios';
import { TextInput } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


const Loginpage=({navigation})=>
{
  const isFocused = useIsFocused()
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userID='1';


  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }




  const Dologin=(token)=>
  {
    navigation.navigate('home',{userName:userID});
  
    const message = {
      to: token,
      sound: 'default',
      title: 'Appointment Notification',
      body: 'you have appointments do check in appointments section',
      data: { someData: 'goes here' },
    };
  
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });



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
    onPress={()=>Dologin(expoPushToken)} 
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
        
        {/* <LinearGradient colors={['#C9D6FF','#E2E2E2']} 
           start={{ x: 0, y: 1 }}
           end={{ x: 1, y: 1 }}
        style={{width:200,marginTop:30,outline:'none',borderRadius:30,borderWidth:1,alignContent:'center',marginLeft:'24%'}}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('signup')}}
        >
    <Text style={{fontSize:15,fontWeight:"bold",padding:10,textAlign:'center'}}>SIGN UP</Text>
    </TouchableOpacity>
    </LinearGradient> */}
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