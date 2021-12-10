import React, { useEffect, useState } from "react";
import {Text,View,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Agenda } from "react-native-calendars";
import axios from 'axios';
import { Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection, } from "./stylesMessage";
const FindDoc=()=>
{
const [App,setApp]=useState([])
const appoint=()=>{
 axios.get("http://clinicmanagement-dev.us-east-2.elasticbeanstalk.com/api/GetAppointmentsByPatientId?id=1")
     .then(function (response) {
    alert("success");
   console.log(response.data[0].patient.appointments[1]);
//    setApp(response.data[0].patient.appointments);
     })
     .catch(function (error) {
       
       alert('wrong schedule');
 });
   
} 
 useEffect(()=>{
  appoint();
   },[])

    return(
  
        // <Agenda />
//         <Container>
// <FlatList
//           data={setApp}
//           keyExtractor={item=>item.}
//           renderItem={({item}) => (
//             <Card onPress={() => navigation.navigate('chat', {sendtoName: item.id.toString(),userName:userId})}>
//               <UserInfo>
//                 <TextSection>
//                   <UserInfoText>
//                     <UserName>{item.id}</UserName>                
//                   </UserInfoText>
//                 </TextSection>
//               </UserInfo>
//             </Card>
//           )}
//         />
//         </Container>
       <View>
           <Text>hi</Text>
       </View>
    )
}

export default FindDoc;