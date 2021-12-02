import React,{useEffect,useState} from "react";
import {Text,View,FlatList,StyleSheet, Alert} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../tabs/stylesMessage';

  
const Allmessages=({navigation,route})=>
{
 
  const userId=route.params.userName;
  const[messages,setmessages]=useState([]);
   const[receive,setreceive]=useState('');

 useEffect(()=>{
 axios.get("https://cs673-group8.herokuapp.com/allConversations/"+userId
  )
  .then(function (response) {
   const data=response.data.conversations;
 setmessages(data);
  })
  .catch(function (error) {
    alert(error);
  });},[])

////new user call
  const newUser=()=>{
    if(receive!='')
    axios.post("https://cs673-group8.herokuapp.com/message/"+userId+"/"+receive+"/"+"Hi i am "+userId)
    .then(function (response) {
    alert("request sent to "+receive);
   
   
    })
    .catch(function (error) {
      // console.warn('issue2');
      alert(error);
    });
  
  
  }




   return(
        <Container>
     <View style={{flexDirection:"row",marginTop:10}}>
          <View style={styles.textinput}>
            <TextInput style={{marginTop:6,fontSize:16}}
            placeholder='Enter the User Name'
            placeholderTextColor='black'
            onChangeText={(newreciever)=>setreceive(newreciever)}
             />
             </View>
             <View style={{paddingHorizontal:10}}>
          
             <TouchableOpacity 
             onPress={newUser}
             style={{width:60,height:50,backgroundColor:'#2e64e5',marginLeft:4,outline:'none',borderRadius:20,borderWidth:1}}>
               <Text style={{color:"#ffff",textAlign:"center",fontWeight:"bold",paddingTop:10}}>PUSH</Text>
              
             </TouchableOpacity>
            </View>
           </View>
        <FlatList
          data={messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('chat', {sendtoName: item.id,userName:userId})}>
              <UserInfo>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.id}</UserName>                
                  </UserInfoText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>


        
    )
}



const styles=StyleSheet.create({
  textinput:
  {borderRadius:20,
    backgroundColor:'#D0D5D3',
    paddingHorizontal:"20%",
    height:50
  }
});
export default Allmessages;