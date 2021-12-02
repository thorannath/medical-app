import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Chat= ({route}) => {
  const [messages, setMessages] = useState([]);
  const mesg=[];
const senderId=route.params.userName;
// const receiverId= route.params.userName;
// console.log(route.params.sendtoName);
// console.log(route.params.userName);
const receiverId=route.params.sendtoName;
  useEffect(() => {

    axios.get("https://cs673-group8.herokuapp.com/messages/"+senderId+"/"+receiverId)
    .then(function(response){
     
       const mesg=response.data.messages;
    
      var id=0;
  for(var data of mesg){
     data._id = id+1;
     id++;
     data.user._id=data.sender;
  };
  //  console.log(mesg);
   var reverser = mesg.reverse(); 
  //  console.log(a);
    setMessages(reverser);
    
    }).catch(function(error){
    
      alert(error);
    }); 
  }, []);

  
  const onSend = useCallback((messages = []) => {
    const messageBody=messages[0].text;
    // console.log(senderId+"/"+receiverId+"/"+messageBody)
    // console.log(messages);

    axios.post("https://cs673-group8.herokuapp.com/message/"+senderId+"/"+receiverId+"/"+messageBody)
    .then(function (response) {
    // alert("success");
   
   
    })
    .catch(function (error) {
      // console.warn('issue2');
      alert(error);
    });






    //  console.log(messageBody);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
   
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
         
          
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
      _id:senderId,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    
    />
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});